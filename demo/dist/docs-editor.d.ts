declare class MarkdownDocument {
    id: string;
    navigationItemLabel: string;
    content: string;
    constructor(content?: string, id?: string, navigationItemLabel?: string);
}

declare enum DocsEditorEvent {
    OpenDocument = "opendoc",
    CloseDocument = "closedoc",
    SaveTimeoutComplete = "savetimeoutcomplete"
}
declare class DocsEditorElement extends HTMLElement {
    #private;
    findElement<T extends HTMLElement = HTMLElement>(id: string): T;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    openNewDocument(): Promise<void>;
    currentDocument?: MarkdownDocument;
    openDocument(document: MarkdownDocument): Promise<void>;
    updateDocument(document: MarkdownDocument): Promise<void>;
    closeDocument(): void;
    saveDocument(document: MarkdownDocument): void;
    updateDocumentsMenu(): Promise<void>;
    startTimeout(): void;
    pauseTimeout(): void;
    resumeTimeout(): void;
    endTimeout(): void;
    timeout_onAnimationFrame(timestamp: number, timeLeft: number): void;
    get saveTimeoutDuration(): number;
    attributeChangedCallback(attributeName: string, oldValue: string, newValue: string): void;
}

export { DocsEditorElement, DocsEditorEvent };
