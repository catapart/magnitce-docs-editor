import { default as style } from './docs-editor.css?raw';
import { default as html } from './docs-editor.html?raw';
import { assignClassAndIdToPart } from 'ce-part-utils';
import { PathRouterElement } from '@magnit-ce/path-router';

import '@magnit-ce/path-router';
import { MarkdownDocument } from './markdown-document';
import { Cache, CacheValueType } from './libs/cache/cache';
import { IndexedDBManager } from './libs/cache/idb-manager';
import { marked } from 'marked';
import { ProgressTimeout } from './progress-timeout';

export enum DocsEditorEvent
{
    OpenDocument = 'opendoc',
    CloseDocument = 'closedoc',
    SaveTimeoutComplete = 'savetimeoutcomplete',
}

const LAST_OPENED_PAGE_KEY = 'last-opened-id';
const DEFAULT_DURATION_MILLISECONDS = 1000;

const COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(style);

const COMPONENT_TAG_NAME = 'docs-editor';
export class DocsEditorElement extends HTMLElement
{
    findElement<T extends HTMLElement = HTMLElement>(id: string) { return this.shadowRoot!.getElementById(id) as T; }

    #datastore: IndexedDBManager;
    #cache: Cache;

    #navItemTemplateContent: DocumentFragment;

    constructor()
    {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot!.innerHTML = html;
        this.shadowRoot!.adoptedStyleSheets.push(COMPONENT_STYLESHEET);

        this.#datastore = new IndexedDBManager();
        this.#cache = new Cache(this.#datastore, 'documents');

        const customTemplate_navItem =this.querySelector<HTMLTemplateElement>('template[slot="nav-item"]');
        this.#navItemTemplateContent = customTemplate_navItem != null
        ? customTemplate_navItem.content
        : this.findElement<HTMLTemplateElement>('nav-item-template').content;
    }

    #isInitialized: boolean = false;
    async #init()
    {
        if(this.#isInitialized == true) { return; }

        await this.#datastore.init({
            name: 'docs-editor-cache',
            version: 1
        });

        this.updateDocumentsMenu();

        const router = this.findElement<PathRouterElement>('router');

        const lastOpenedPage = await this.#cache.getValue<string>(LAST_OPENED_PAGE_KEY);
        if(lastOpenedPage != null)
        {
            router.navigate(lastOpenedPage)
        }

        router.addRouteLinkClickHandlers(this.findElement('menu'));

        this.#isInitialized = true;
    }

    connectedCallback()
    {
        this.addEventListener('click', this.#boundClickHandler);
        this.findElement<PathRouterElement>('router').addEventListener('change', this.#boundPathChangeHandler);
        this.findElement('document-content').addEventListener('keyup', this.#boundKeyUpHandler);
        this.findElement('document-title').addEventListener('keyup', async (event) =>
        {
            if(this.currentDocument == null) { return; }
            const input = event.currentTarget as HTMLInputElement;
            this.currentDocument.navigationItemLabel = input.value;
            await this.saveDocument(this.currentDocument);
            const navigationItem = this.shadowRoot!.querySelector(`[data-route="doc/${this.currentDocument.id}"]`);
            if(navigationItem == null) { return; }
            navigationItem.textContent = this.currentDocument.navigationItemLabel;
            
        });
        assignClassAndIdToPart(this.shadowRoot!);

        this.#init();
    }
    disconnectedCallback()
    {
        this.removeEventListener('click', this.#boundClickHandler);
    }

    async openNewDocument()
    {
        const document = new MarkdownDocument();
        await this.saveDocument(document);
        await this.updateDocumentsMenu();
        this.findElement<PathRouterElement>('router').navigate(`doc/${document.id}`);
    }
    
    currentDocument?: MarkdownDocument;
    async openDocument(document: MarkdownDocument)
    {
        console.log('document');
        await this.closeDocument();
        await this.updateDocument(document);
        this.findElement<HTMLTextAreaElement>('document-content').value = document.content;
        this.findElement<HTMLInputElement>('document-title').value = document.navigationItemLabel;
        this.currentDocument = document;
        this.setAttribute('target', document.id);
        this.part.add('target');
        this.#cache.setValue(LAST_OPENED_PAGE_KEY, `doc/${document.id}`);
    }
    async updateDocument(document: MarkdownDocument)
    {
        this.findElement<HTMLElement>('document').innerHTML = await marked.parse(document.content);
    }
    async closeDocument()
    {
        if(this.currentDocument == null) { return; }

        await this.saveDocument(this.currentDocument);
        this.findElement<HTMLInputElement>('document-title').value = "";
        this.findElement<HTMLTextAreaElement>('document-content').value = "";
        this.removeAttribute('target');
        this.part.remove('target');
        this.currentDocument = undefined;
    }

    async getDocument(id: string)
    {
        const documentRecord = await this.#cache.getValue<string>(id);
        if(documentRecord == null) { return null; }
        const document = JSON.parse(documentRecord);
        return document as MarkdownDocument;
    }
    async saveDocument(document: MarkdownDocument)
    {
        const documentRecord = JSON.stringify(document);
        console.log(documentRecord);
        await this.#cache.setValue(document.id, documentRecord);
    }

    async updateDocumentsMenu()
    {
        const navigationItemDescription = (this.#navItemTemplateContent.cloneNode(true) as HTMLElement).querySelector('*');
        if(navigationItemDescription == null) { return; }

        const nav = this.findElement('nav');
        nav.innerHTML = '';

        const values = (await this.#cache.getAllValues<string>()).filter(item => item != null);
        for(let i = 0; i < values.length; i++)
        {
            if(!values[i].startsWith('{')) { continue; }

            const navigationItem = navigationItemDescription.cloneNode(true) as HTMLElement;
            try
            {
                const document = JSON.parse(values[i]) as MarkdownDocument;
                
                navigationItem.textContent = document.navigationItemLabel;
                navigationItem.setAttribute('data-route', `doc/${document.id}`);
                nav.append(navigationItem);
            }
            catch(exception)
            {
                console.error(exception);
            }
        }

    }

    toggleMarkdownGuide()
    {
        if(this.getAttribute('markdown-guide') == null)
        {
            this.openMarkdownGuide();
        }
        else
        {
            this.closeMarkdownGuide();
        }
    }
    openMarkdownGuide()
    {
        this.toggleAttribute('markdown-guide', true);
        this.part.add('markdown-guide');
    }
    closeMarkdownGuide()
    {
        this.toggleAttribute('markdown-guide', false);
        this.part.remove('markdown-guide');
    }

    #boundClickHandler: (event: Event) => void = this.#onClick.bind(this);
    #onClick(event: Event)
    {
        const composedPath = event.composedPath();
        console.log(composedPath);

        const newDocumentButton = composedPath.find(item => item instanceof HTMLButtonElement && item.id.indexOf('new-document') > -1);
        if(newDocumentButton != null)
        {
            this.openNewDocument();
            return;
        }
        
        const markdownGuideButton = composedPath.find(item => item instanceof HTMLButtonElement && item.id == 'markdown-guide-button');
        if(markdownGuideButton != null)
        {
            this.toggleMarkdownGuide();
            return;
        }
        const exportButton = composedPath.find(item => item instanceof HTMLButtonElement && item.id == 'export-button');
        if(exportButton != null)
        {
            console.log('export');
            // this.export();
            return;
        }
    }
    #boundPathChangeHandler: (event: Event|CustomEvent) => void = this.#onPathChange.bind(this);
    async #onPathChange(event: Event|CustomEvent)
    {
        const customEvent = event as CustomEvent;
        if(customEvent.detail.route == this.findElement('welcome'))
        {
            if(this.#isInitialized == true)
            {
                await this.closeDocument();
                this.#cache.setValue(LAST_OPENED_PAGE_KEY, '');
            }
            return;
        }
        else if(customEvent.detail.route == this.findElement('help'))
        {
            await this.closeDocument();
            this.#cache.setValue(LAST_OPENED_PAGE_KEY, 'help');
            return;
        }

        const documentId = (event.target as HTMLElement)?.getAttribute('path')?.substring(4);
        if(documentId == null || (event as CustomEvent).detail.route != this.findElement('document')) { return; }
        const document = await this.getDocument(documentId);
        if(document == null) { return }
        await this.openDocument(document);
    }
    #boundKeyUpHandler: (event: Event) => void = this.#onKeyUp.bind(this);
    #onKeyUp(event: Event)
    {
        if(this.currentDocument == null) { return; }

        this.currentDocument.content = this.findElement<HTMLTextAreaElement>('document-content')!.value ?? "";
        this.endTimeout();
        requestAnimationFrame(() =>
        {
            this.startTimeout();
        });
    }

    
    #timeout?: ProgressTimeout;
    // #animationFrameHandle?: ReturnType<typeof requestAnimationFrame>;
    startTimeout()
    {
        this.#timeout = new ProgressTimeout(this.saveTimeoutDuration, this.timeout_onAnimationFrame.bind(this), async () =>
        { 
            this.#timeout = undefined;
            const result = this.dispatchEvent(new CustomEvent(DocsEditorEvent.SaveTimeoutComplete, { cancelable: true, bubbles: true }));
            if(this.currentDocument == null) { return; }
            await this.saveDocument(this.currentDocument);
            await this.updateDocument(this.currentDocument);
        });
        this.#timeout.start();
    }
    pauseTimeout()
    {
        if(this.#timeout != null) { this.#timeout.pause(); }
    }
    resumeTimeout()
    {
        if(this.#timeout != null) { this.#timeout.resume(); }
    }
    endTimeout()
    {
        if(this.#timeout != null) { this.#timeout!.clear(); }
    }
    timeout_onAnimationFrame(timestamp: number, timeLeft: number)
    {
        let progress = ((100 * timeLeft) / this.#timeout!.duration);
        if(progress % 10 == 0) { console.log(progress); }
        
        // this.findP<HTMLProgressElement>('duration').value = progress;
    }
    get saveTimeoutDuration()
    {
        const durationAttribute = this.getAttribute('duration');
        return durationAttribute != null ? parseInt(durationAttribute) :  DEFAULT_DURATION_MILLISECONDS;
    }

    // static observedAttributes = [''];
    attributeChangedCallback(attributeName: string, oldValue: string, newValue: string)
    {
        if(attributeName == '')
        {
        }
    }
}

if(customElements.get(COMPONENT_TAG_NAME) == null)
{
    customElements.define(COMPONENT_TAG_NAME, DocsEditorElement);
}