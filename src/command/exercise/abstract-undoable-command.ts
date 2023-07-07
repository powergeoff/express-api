import { IUndoableCommand } from "../undoable-command.interface";
import { History } from "../history";
import { UndoCommand } from "./undo-command";
import { ICommand } from "../command.interface";

export abstract class AbstractUndoableCommand<T> extends UndoCommand {
    private _document: T;

    constructor(doc: T, history: History<UndoCommand>) {
        super(history);
        this._document = doc;
    }
    
    public execute = () => {
        this.doExecute();
        this._history.push(this);
    };
    protected abstract doExecute: () => void;
    protected abstract undoExecute: () => void;
}