import { AuditTrail } from "./audit-trail";

export abstract class Task {
    //private _auditTrail: AuditTrail = new AuditTrail();
    private _auditTrail: AuditTrail;

    constructor(auditTrail: AuditTrail) {
        this._auditTrail = auditTrail;
    } 

    public execute = () => {
        this._auditTrail.record();
        this.doExecute();
    }
    //protected so it can only be called within this class
    //to use it you gotta call execute which will do any necessary stuff
    protected abstract doExecute: () => void;

}