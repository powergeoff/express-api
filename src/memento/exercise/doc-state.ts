import { IDocument } from "./document-originator";

export class DocumentState {
    private state: IDocument;
    
    constructor(state:IDocument){
        this.state = state;
    }
    public getState(): IDocument {
        return this.state;
    }
}