import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import config from "./config";

import apiRouter from "./routes";
import errorsMiddleware from "./middleware/error-middleware";

const PORT = config.PORT;

const app = express();
app.use(express.json());
app.use(cors({
  // origin: [
  //   'http://localhost',
  // ],
  origin: /http:\/\/localhost:.{4,5}/,
  credentials: true
}));
app.use(cookieParser());

app.use("/api", apiRouter);
app.use(errorsMiddleware);

// START OF LEARN OPENTELEMETRY
import { trace } from '@opentelemetry/api';
import { rollTheDice, tracer as diceTracer } from "./dice";
const tracer = trace.getTracer('http_jwt_auth-server', '0.1.0');

app.get('/rolldice', (req, res) => {
  const rolls = req.query.rolls ? parseInt(req.query.rolls.toString()) : NaN;
  if (isNaN(rolls)) {
    res
      .status(400)
      .send("Request parameter 'rolls' is missing or not a number.");
    return;
  }

  const roll = JSON.stringify(rollTheDice(rolls, 1, 6))
  // const activeSpan = trace.getActiveSpan();

  // console.log("activeSpan", activeSpan);
  
  const span1 = tracer.startSpan('work-1');

  // if (activeSpan) {
    // activeSpan.end()
  // }
  span1.end();
  res.send(roll);
});

// END OF LEARN OPENTELEMETRY

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`
        Server started at
        http://localhost:${PORT}
      `);
    })
  } catch (error) {
    console.log("Error from start server", error);
  }
};

start();