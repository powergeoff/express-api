import { Observer } from "./oberver";

export class Subject {
    private observers: Array<Observer> = new Array<Observer>();
    private _state!: number;

    public get state(): number {
        return this._state;
    }
    public set state(theState: number) {
        this._state = theState;
        this.notifyAllObservers();
    }

    public attach(observer: Observer): void {
        this.observers.push(observer);
    }

    public notifyAllObservers(): void {
        for(var index in this.observers){ 
            this.observers[index].update(); 
        }
    }
}