
import express, { Request, Response } from "express";
import { Subject } from "./subject";
import { BinaryObserver } from "./binary-observer";
import { OctalObserver } from "./octal-observer";
import { StatusBar } from "./stocks/status-bar";
import { StockList } from "./stocks/stock-list";
import { Stock } from "./stocks/stock";
/**
 * Router Definition
 */
export const observerRouter = express.Router();

observerRouter.get("/", async (req: Request, res: Response) => {
    try {
        //use this as entry point to your stuff
        const subject = new Subject();
        const binary = new BinaryObserver(subject);
        const octal = new OctalObserver(subject);

        console.log("First attempt: 15");
        subject.state = 15;

        console.log("Second attempt: 10");
        subject.state = 10;

        const statusBar = new StatusBar();
        const stockList = new StockList();

        var stock1 = new Stock("stock1", 10);
        var stock2 = new Stock("stock2", 20);
        var stock3 = new Stock("stock3", 30);

        // The status bar shows the popular stocks
        statusBar.addStock(stock1);
        statusBar.addStock(stock2);

        // The stock view list shows all stocks
        stockList.addStock(stock1);
        stockList.addStock(stock2);
        stockList.addStock(stock3);

        // Causes both statusBar and stockListView to get refreshed
        //stock2.price = 21;

        // Causes only the stockListView to get refreshed. (statusBar
        // is not watching this stock.)
        stock3.price = 9;
  
        res.status(200).send("hello from observer router");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
  });