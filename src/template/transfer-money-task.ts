import { Task } from "./task";

export class TransferMoneyTask extends Task {
    protected doExecute = () => console.log("Transfer Cash");
}