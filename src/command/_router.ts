
import express, { Request, Response } from "express";
import { HtmlDocument } from "./html-document";
import { BoldCommand } from "./bold-command";
import { History } from "./history";
import { IUndoableCommand } from "./undoable-command.interface";
/**
 * Router Definition
 */
export const commandRouter = express.Router();

commandRouter.get("/", async (req: Request, res: Response) => {
    try {
        //use this as entry point to your stuff
        const history = new History<IUndoableCommand>();

        const document = new HtmlDocument();
        document.content = "Hello World";

        const boldCommand = new BoldCommand(document, history);
        boldCommand.execute();
        console.log(document.content);

        boldCommand.undoExecute();
        console.log(document.content)

  
        res.status(200).send("hello from COMMAND router");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
  });