const express = require("express");
const app = express();
app.use(express.json());
const subscriberModel = require("./model/subscribers");
const subscribersRoute = require("./routes/subscribersRoute");

// Your code goes here

app.use("/", subscribersRoute);
app.use((req, res, next) => {
  res.status(404).send("Not found");
});

module.exports = app;
