import { ArrayStringIterator } from "./array-iterator";

export class BrowseHistory {
    private _urls: Array<string> = new Array<string>();
    private _count: number = 0;

    public push = (url: string) => {
        this._urls[this._count++] = url;
    }

    public pop = () => {
        return this._urls[--this._count];
    }

    public get count(): number {
        return this._count;
    }
    public set count(theCount: number) {
        this._count = theCount;
    }

    public get urls(): Array<string> {
        return this._urls;
    }
    //enforce dependency
    public createIterator = (): ArrayStringIterator => {
        return new ArrayStringIterator(this);
    }
    

}