import { Memento } from "./memento";

export class CareTaker {
    private mementoList: Array<Memento> = new Array<Memento>();

    public add(state: Memento) {
        this.mementoList.push(state);
    }
    public undo(): Memento {
        //remove the last memento added
        const lastMemento = this.mementoList.pop();
        //return the one before for undo function
        const lastIndex = this.mementoList.length;
        return this.mementoList[lastIndex - 1];
    }
    public showAll() {
        for (let index = 0; index < this.mementoList.length; index++) {
            console.log(this.mementoList[index]);
        }
    }
}