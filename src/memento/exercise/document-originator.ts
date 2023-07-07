import { DocumentState } from "./doc-state";

export interface IDocument {
    content?: string;
    fontName?: string;
    fontSize?:number;
}

export class Document {
    private _content!: string;
    private _fontName!: string;
    private _fontSize!: number;

    public get content(): string {
        return this._content;
    }
    public set content(theContent: string) {
        this._content = theContent;
    }

    public get fontName(): string {
        return this._fontName;
    }
    public set fontName(theFontName: string) {
        this._fontName = theFontName;
    }

    public get fontSize(): number {
        return this._fontSize;
    }
    public set fontSize(theFontSize: number) {
        this._fontSize = theFontSize;
    }

    public createState(): DocumentState {
        //creates dependency
        return new DocumentState({'content': this._content, 'fontName': this._fontName, 'fontSize': this._fontSize});
    }

    public restore(history: DocumentState): void {
        const doc = history.getState();
        this._content = doc.content ?? '';
        this._fontName = doc.fontName ?? '';
        this._fontSize = doc.fontSize ?? 7;
    }

    public toString = () => {
        return "Document{" +
                "content='" + this._content + '\'' +
                ", fontName='" + this._fontName + '\'' +
                ", fontSize=" + this._fontSize +
                '}';
    }

}

