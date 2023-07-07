import { Product } from "./product";
import { ProductIterator } from "./product-iterator";

export class ProductCollection {
    private _products = new Array<Product>();
    //private _count!: number;

    public add = (product: Product) => {
        this._products.push(product);
    }

    //enforce dependency
    public createIterator = (): ProductIterator => {
        return new ProductIterator(this);
    }


    public get count(): number{
        return this._products.length;
    }
    public get products(): Array<Product> {
        return this._products;
    }
}