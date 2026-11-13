import express from 'express';
import { handlerReadiness } from "./src/api/readiness.js";
const app = express();
const port = 8080;
app.use("/app", express.static("./src/app"));
app.get("/healthz", handlerReadiness);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
