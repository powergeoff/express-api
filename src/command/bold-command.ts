import { HtmlDocument } from "./html-document";
import { IUndoableCommand } from "./undoable-command.interface";
import { History } from "./history";

export class BoldCommand implements IUndoableCommand{
    private _prevContent!: string;
    private _document: HtmlDocument;
    private _history: History<IUndoableCommand>;

    constructor(doc: HtmlDocument, history: History<IUndoableCommand>) {
        this._document = doc;
        this._history = history;
    }
    
    undoExecute = () => {
        console.log("Undo Stuff");
        this._document.content = this._prevContent;
        this._history.pop();
    };
    execute = () => {
        console.log("Do Stuff");
        this._prevContent = this._document.content;
        this._document.makeBold();
        this._history.push(this);
    };
}