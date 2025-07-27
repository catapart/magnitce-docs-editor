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

        const welcomeItem = (this.#navItemTemplateContent.cloneNode(true) as HTMLElement).querySelector('.nav-item');
        if(welcomeItem != null)
        {
            welcomeItem.textContent = 'Welcome';
            welcomeItem.setAttribute('data-route', '');
            this.findElement('nav').append(welcomeItem);
        }
        const helpItem = (this.#navItemTemplateContent.cloneNode(true) as HTMLElement).querySelector('.nav-item');
        if(helpItem != null)
        {
            helpItem.textContent = 'Help';
            helpItem.setAttribute('data-route', 'help');
            this.findElement('nav').append(helpItem);
        }
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

        this.findElement<PathRouterElement>('router')!.addRouteLinkClickHandlers(this.findElement('nav'));

        this.#isInitialized = true;
    }

    connectedCallback()
    {
        this.addEventListener('click', this.#boundClickHandler);
        this.findElement<PathRouterElement>('router').addEventListener('change', this.#boundPathChangeHandler);
        this.findElement('edit-content').addEventListener('keyup', this.#boundKeyUpHandler);
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
        await this.updateDocument(document);
        this.findElement('edit-content').textContent = document.content;
        this.currentDocument = document;
        this.setAttribute('target', document.id);
    }
    async updateDocument(document: MarkdownDocument)
    {
        this.findElement<HTMLElement>('document').innerHTML = await marked.parse(document.content);
        this.findElement<HTMLElement>('document').append(document.navigationItemLabel);
    }
    closeDocument()
    {
        this.removeAttribute('target');
        this.currentDocument = undefined;
    }

    saveDocument(document: MarkdownDocument)
    {
        const documentRecord = JSON.stringify(document);
        console.log(documentRecord);
        this.#cache.setValue(document.id, documentRecord);
    }

    async updateDocumentsMenu()
    {
        const navigationItem = (this.#navItemTemplateContent.cloneNode(true) as HTMLElement).querySelector('*');
        if(navigationItem == null) { return; }

        const values = (await this.#cache.getAllValues<string>()).filter(item => item != null);
        for(let i = 0; i < values.length; i++)
        {
            console.log(values[i]);
            const document = JSON.parse(values[i]) as MarkdownDocument;
            
            navigationItem.textContent = document.navigationItemLabel;
            navigationItem.setAttribute('data-route', `doc/${document.id}`);
            this.findElement('nav').append(navigationItem);
        }

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
    }
    #boundPathChangeHandler: (event: Event|CustomEvent) => void = this.#onPathChange.bind(this);
    async #onPathChange(event: Event|CustomEvent)
    {
        const documentId = (event.target as HTMLElement)?.getAttribute('path')?.substring(4);
        if(documentId == null || (event as CustomEvent).detail.route != this.findElement('document')) { return; }
        const documentRecord = await this.#cache.getValue<string>(documentId);
        if(documentRecord == null) { return; }
        const document = JSON.parse(documentRecord);
        await this.openDocument(document);
    }
    #boundKeyUpHandler: (event: Event) => void = this.#onKeyUp.bind(this);
    #onKeyUp(event: Event)
    {
        if(this.currentDocument == null) { return; }

        this.currentDocument.content = this.findElement('edit-content')!.textContent ?? "";
        console.log(this.currentDocument.content);
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