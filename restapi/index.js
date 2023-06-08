import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

import Routes from "./routes/route.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Portfolio api");
});

app.use("/data", Routes);

app.listen(5050, () => {
  console.log("http://localhost:5050");
});
