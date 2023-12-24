// Import required modules
const app = require("./app.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Configuration of env
dotenv.config();

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Db connected");
  })
  .catch((erro) => erro);

// Start Server and make it listen on the specified port
// A message will be printed to the console once the server is up and running
app.listen(process.env.PORT, () =>
  console.log(`App listening on port ${process.env.PORT}!`)
);
