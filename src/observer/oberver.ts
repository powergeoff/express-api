import { Subject } from "./subject";

export abstract class Observer {
    abstract subject: Subject;
    abstract update(): void;
}