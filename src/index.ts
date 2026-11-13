import express, { type Express, type Request, type Response } from 'express';
import { handlerReadiness } from "./api/readiness.js"
const app: Express = express();
const port = 8080;

app.use("/app", express.static("./src/app"));

app.get("/healthz", handlerReadiness);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
