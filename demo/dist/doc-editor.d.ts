declare class DocEditorElement extends HTMLElement {
    #private;
    findElement<T extends HTMLElement = HTMLElement>(id: string): T;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(attributeName: string, oldValue: string, newValue: string): void;
}

export { DocEditorElement };
