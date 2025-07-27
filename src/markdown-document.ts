export class MarkdownDocument
{
    id: string;
    navigationItemLabel: string = "New Document";
    content: string = "";
    constructor(content?: string, id?: string, navigationItemLabel?:string)
    {
        this.id = id ?? generateId();
        this.navigationItemLabel = navigationItemLabel ?? this.navigationItemLabel;
        this.content = content ?? this.content;
    }
}


/**
* Create a random, locally-unique string value to use as an id
* @returns a `string` id value
*/
export function generateId(): string
{
    const rnd = new Uint8Array(20);
    crypto.getRandomValues(rnd);

    const b64 = [].slice
    .apply(rnd)
    .map((ch) =>
    {
        return String.fromCharCode(ch);
    })
    .join('');

    const secret = btoa(b64)
    .replace(/\//g, '_')
    .replace(/\+/g, '-')
    .replace(/=/g, '');

    return secret;
}
