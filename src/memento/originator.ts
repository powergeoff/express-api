import { Memento } from "./memento";

export class Originator {
    private _state!: string;
    //this has a dependency on memento i thought it would be passed in the constructor
    //private _memento: Memento;

    public get state(): string {
        return this._state;
    }
    public set state(theState: string) {
        this._state = theState;
    }

    /* constructor(state: string) {
        this._state = state;
    } */

    public createState(): Memento {
        //creates dependency
        return new Memento(this._state);
    }

    public restore(memento: Memento): void {
        this._state = memento.getState();
    }

}