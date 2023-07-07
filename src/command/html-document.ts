export class HtmlDocument {
    private _content!: string;

    public makeBold = (): void => {
        this._content = "<b>" + this._content + "</b>";
    }

    public get content() {
        return this._content;
    }

    public set content(theContent: string) {
        this._content = theContent;
    }
}