import * as path from "path";
import * as express from "express";
import * as mongoose from "mongoose";

import appRouter from "./app.router";

// [DB Connection]

declare var MONGODB_URI: string;

/**
 * connectToDatabase
 * Configures the global MongoDB connection based on the provided secrets.
 *
 * @returns Promise<string>
 */
async function connectToDatabase(connectionUri: string) {
  return new Promise((resolve, reject) => {
    // From mongoose@6.x.x onwards useNewUrlParser, useUnifiedTopology,
    // useCreateIndex are deprecated and default to true
    mongoose
      .connect(connectionUri)
      .then(() => {
        console.log("Connected to DB");
        resolve(connectionUri);
      })
      .catch((error: any) => {
        console.log(error);
        reject(`${connectionUri}: ${error}`);
      });
  });
}
connectToDatabase(MONGODB_URI);

// [Express setup]

const app = express(),
  DIST_DIR = __dirname;
app.use(express.static(DIST_DIR));
app.use(express.json());
app.use(appRouter);

app.get("/health", async (req, res) => {
  res.status(200).json({ healthy: true });
});

// [Express start]

const PORT: number | string = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
