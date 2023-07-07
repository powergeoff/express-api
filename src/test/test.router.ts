
import express, { Request, Response } from "express";
import { Subject } from "../observer/subject";
import { BinaryObserver } from "../observer/binary-observer";
import { OctalObserver } from "../observer/octal-observer";
import { StatusBar } from "../observer/stocks/status-bar";
import { StockList } from "../observer/stocks/stock-list";
import { Stock } from "../observer/stocks/stock";
/**
 * Router Definition
 */
export const testRouter = express.Router();

testRouter.get("/", async (req: Request, res: Response) => {
    try {
        res.status(200).send("hello from test");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
  });