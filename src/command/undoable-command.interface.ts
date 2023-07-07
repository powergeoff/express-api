import { ICommand } from "./command.interface";

export interface IUndoableCommand extends ICommand{
    undoExecute: () => void;
}