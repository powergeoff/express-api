import { IIterator } from "../iterator";
import { Product } from "./product";
import { ProductCollection } from "./product-collection";

export class ProductIterator implements IIterator<Product> {
    private _history: ProductCollection;
    private _index: number;

    constructor(history: ProductCollection){
        this._history = history;
        this._index = 0;
    }

    public hasNext = () => {
        return this._index < this._history.count;
    };

    public current = () => {
        return this._history.products[this._index]; 
    };
    //you don't return anything - you just increment the index
    public next = () => {this._index++}
    
}