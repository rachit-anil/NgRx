import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
const bodyParser = require("body-parser");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT;

const FAKE_DATA = {
  message: "A message from node",
};
const TIME_DELAY = 3000;

app.get("/storeCount", (req, res) => {
  setTimeout(() => {
    res.send("Count Stored");
  }, TIME_DELAY);
});

app.get("/fruits", (req, res) => {
  res.send(["Orange", "Banana", "Apricot", "Apple", "Guava"]);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
