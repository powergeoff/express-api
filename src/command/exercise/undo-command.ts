import { ICommand } from "../command.interface";
import { History } from "../history";

export abstract class UndoCommand {
    private _history: History<UndoCommand>;

    constructor(history: History<UndoCommand>){
        this._history = history;
    }
    execute = () => {
        this._history.pop();
    }
}