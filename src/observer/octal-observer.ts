import { Observer } from "./oberver";
import { Subject } from "./subject";

export class OctalObserver implements Observer {

    subject: Subject;

    constructor(subject: Subject) {
        this.subject = subject;
        this.subject.attach(this);
    }

    update(): void {
        console.log("Octal String: " + this.subject.state);
    }
    
}