import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";

import AcademicsRoute from "./routes/route.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use("/data", AcademicsRoute);

const startServer = () => {
  try {
    app.listen(8080, () => {
      console.log("http://localhost:8080");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();