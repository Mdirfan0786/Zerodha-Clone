require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParsers = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// importing Models
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");
const { userVerification } = require("./Middlewares/AuthMiddleware");
const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URL;
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);
app.use(bodyParsers.json());
app.use(cookieParser());

// Routes

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});

app.put("/sellOrder", async (req, res) => {
  const { name, qty } = req.body;
  let existingOrder = await OrdersModel.findOne({ name });
  console.log(existingOrder);
  if (!existingOrder) {
    console.log("Please Buy First!");
  } else {
    await OrdersModel.findOneAndDelete({ name, qty });
  }
});

app.get("/allOders", async (req, res) => {
  let allOders = await OrdersModel.find({});
  res.json(allOders);
});

app.use("/", authRoute);

mongoose
  .connect(url)
  .then(() => {
    console.log("DB Connected!");
    app.listen(PORT, () => console.log("Server Running"));
  })
  .catch((err) => console.log(err));
