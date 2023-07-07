import { BrowseHistory } from "./browse-history";
import { IIterator } from "./iterator";

export class ArrayStringIterator implements IIterator<string> {
    private _history: BrowseHistory;
    private _index: number;

    constructor(history: BrowseHistory){
        this._history = history;
        this._index = 0;
    }

    public hasNext = () => {
        return this._index < this._history.count;
    };

    public current = () => {
        return this._history.urls[this._index]; 
    };

    public next = () => {this._index++}
}