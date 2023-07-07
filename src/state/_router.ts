
import express, { Request, Response } from "express";
import { Canvas } from "./canvas";
import { BrushTool } from "./brush-tool";
import { SelectionTool } from "./selection-tool";
/**
 * Router Definition
 */
export const stateRouter = express.Router();

stateRouter.get("/", async (req: Request, res: Response) => {
    try {
        //use this as entry point to your stuff
        const canvas = new Canvas();
        const brushTool = new BrushTool();

        canvas.currentTool = new SelectionTool();

        canvas.mouseDown();
        canvas.mouseUp();

  
        res.status(200).send("hello from STATE router");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
  });