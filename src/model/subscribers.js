const mongoose = require("mongoose");

// this is schema for api
const susbcriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscribedChannel: {
    type: String,
    required: true,
  },
  subscribedDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Subscriber", susbcriberSchema);
