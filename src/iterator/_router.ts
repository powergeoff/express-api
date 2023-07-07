
import express, { Request, Response } from "express";
import { BrowseHistory } from "./browse-history";
import { IIterator } from "./iterator";
import { ProductCollection } from "./exercise/product-collection";
import { Product } from "./exercise/product";
/**
 * Router Definition
 */
export const iteratorRouter = express.Router();

iteratorRouter.get("/", async (req: Request, res: Response) => {
    try {
        //use this as entry point to your stuff
        /* const browserHistory = new BrowseHistory();
        const iterator: IIterator<string> = browserHistory.createIterator();

        browserHistory.push("google");
        browserHistory.push("yahoo");
        browserHistory.push("excite");
        browserHistory.push("mapquest"); */
        const productsHistory = new ProductCollection();
        productsHistory.add(new Product(1, 'stuff'));
        productsHistory.add(new Product(2, 'things'));
        productsHistory.add(new Product(3, 'junk'));
        const iterator = productsHistory.createIterator();

        while(iterator.hasNext()){
            console.log(iterator.current());
            iterator.next();
        }

  
        res.status(200).send("hello from ITERATOR router");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
  });