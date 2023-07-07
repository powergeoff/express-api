
import express, { Request, Response } from "express";
import { GenerateReportTask } from "./generate-report-rask";
import { AuditTrail } from "./audit-trail";
import { TransferMoneyTask } from "./transfer-money-task";
/**
 * Router Definition
 */
export const templateRouter = express.Router();

templateRouter.get("/", async (req: Request, res: Response) => {
    try {
        //use this as entry point to your stuff
        const reportTask = new GenerateReportTask(new AuditTrail());
        reportTask.execute();

        const transferMoneyTask = new TransferMoneyTask(new AuditTrail());
        transferMoneyTask.execute();
        transferMoneyTask.execute();
  
        res.status(200).send("hello from TEMPLATE router");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
  });