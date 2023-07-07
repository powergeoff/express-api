
import express, { Request, Response } from "express";
import { Originator } from "./originator";
import { CareTaker } from "./care-taker";
import { Document } from "./exercise/document-originator";
import { History } from "./exercise/history";
/**
 * Router Definition
 */
export const mementoRouter = express.Router();

mementoRouter.get("/", async (req: Request, res: Response) => {
    try {
        //use this as entry point to your stuff
        /*const originator = new Originator();
        const careTaker = new CareTaker();

        originator.state = "State #1";
        careTaker.add(originator.createState());

        originator.state = "State #2";
        careTaker.add(originator.createState());
        
        originator.state = "State #3";
        careTaker.add(originator.createState());
        originator.restore(careTaker.undo());
        
        originator.state = "State #4";
        careTaker.add(originator.createState());

        //originator.restore(careTaker.remove());
        console.log(originator.state);
        careTaker.showAll();
        */
        
        const document = new Document();
        const history = new History();

        document.content = "First Contnet";
        document.fontName = "Roamn Sans Serif";
        document.fontSize = 4;
        history.add(document.createState());

        document.content = "Second Contnet";
        document.fontName = "bnone";
        document.fontSize = 47;
        history.add(document.createState());

        console.log(document.toString());
        document.restore(history.undo());
        console.log(document.toString());

  
        res.status(200).send("hello from memento router");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
  });