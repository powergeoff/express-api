import { Observer } from "./oberver";
import { Subject } from "./subject";

export class BinaryObserver implements Observer {

    subject: Subject;

    constructor(subject: Subject) {
        this.subject = subject;
        this.subject.attach(this);
    }

    update(): void {
        console.log("Binary String: " + this.subject.state);
    }
    
}