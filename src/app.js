const express = require("express");
const app = express();

app.use(express.json());
const subscriberModel = require("./model/subscribers");
const subscribersRoute = require("./routes/subscribersRoute");

// Your code goes here
// all code are in Controller folder

// we have used Model-View-Controller(MVC architecture) that's why this is our folder structure

app.use("/", subscribersRoute);

//
app.use((req, res) => {
  res.status(404).send("Not found");
});


module.exports = app;
