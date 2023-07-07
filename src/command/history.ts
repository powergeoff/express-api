export class History<T> {
    private _historyItems: Array<T> = new Array<T>();

    public push = (item: T) => {
        this._historyItems.push(item);
    }

    public pop = (): T | undefined => {
        return this._historyItems.pop();
    }

}