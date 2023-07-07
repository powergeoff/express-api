import { DocumentState } from "./doc-state";

export class History {
   private historyList: Array<DocumentState> = new Array<DocumentState>();

   public add(state: DocumentState) {
    this.historyList.push(state);
   }

   public undo(): DocumentState {
        //remove the last memento added
        const lastHist = this.historyList.pop();
        //return the one before for undo function
        const lastIndex = this.historyList.length;
        return this.historyList[lastIndex - 1];
    }
}