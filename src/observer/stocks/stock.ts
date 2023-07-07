import { Observer } from "./observer";

export class Stock {
    private observers: Array<Observer> = new Array<Observer>();
    private _price!: number;
    private _symbol: string;

    constructor(symbol: string, price: number) {
        this._symbol = symbol;
        this._price = price;
    }

    public get price(): number {
        return this._price;
    }
    public set price(thePrice: number) {
        this._price = thePrice;
        this.notifyAllObservers();
    }

    public addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer, 0);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    public notifyAllObservers(): void {
        for(var index in this.observers){ 
            this.observers[index].update(); 
        }
    }

    public toString(): string {
        return "Stock{" +
        "symbol='" + this._symbol + '\'' +
        ", price=" + this._price +
        '}';
    }
}