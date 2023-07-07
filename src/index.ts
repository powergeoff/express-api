/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

//routers
import { itemsRouter } from "./items/items.router";
import { testRouter } from "./test/test.router";
import { observerRouter } from "./observer/_router";
import { mementoRouter } from "./memento/_router";
import { stateRouter } from "./state/_router";
import { iteratorRouter } from "./iterator/_router";
import { templateRouter } from "./template/_router";
import { commandRouter } from "./command/_router";

//errors
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";


dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
 }
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/menu/items", itemsRouter);
app.use("/api/test/", testRouter);
app.use("/api/observer/", observerRouter);
app.use("/api/memento/", mementoRouter);
app.use("/api/state/", stateRouter);
app.use("/api/iterator/", iteratorRouter);
app.use("/api/template/", templateRouter);
app.use("/api/command/", commandRouter);

app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });