import { VideoEditor } from "./video-editor";
import { AbstractUndoableCommand } from "./abstract-undoable-command";
import { IUndoableCommand } from "../undoable-command.interface";
import { History } from "../history";
import { inherits } from "util";
import { UndoCommand } from "./undo-command";
//reorg this thing - get the pen and paper, research template, command and memento patterns and apply appropriately
//design it by hand first!!
export class SetTextCommand extends AbstractUndoableCommand<VideoEditor>{
    
    private _text: string;

    constructor(text: string, doc: VideoEditor, history: History<UndoCommand>) {
        super(doc, history);
        this._text = text;
    }

    protected doExecute = () => {};
}