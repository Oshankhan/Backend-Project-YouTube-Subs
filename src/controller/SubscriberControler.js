// Import required modules
const Subscribers = require("../model/subscribers");
const catchAsyncError = require("../../middleware/catchAsyncError");
const path = require("path");


// API to render html file
exports.homePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../view/index.html"));
}

// API to create a subscriber
exports.createSubs = catchAsyncError(async (req, res) => {
  console.log(req.body);
  const subs = await Subscribers.create(req.body);

  res.status(200).json({
    success: true,
    subs,
  });
});

// API to get all data of subscribers
exports.getAllSubs = catchAsyncError(async (req, res) => {
  const subs = await Subscribers.find();
  res.status(200).json({
    success: true,
    subs,
  });
});

// API to get subscribers by name
exports.nameOfSubs = catchAsyncError(async (req, res) => {
  const subs = await Subscribers.find();
  const dataToShow = subs.map(({ name, subscribedChannel }) => ({
    name,
    subscribedChannel,
  }));

  res.status(200).json({
    success: true,
    Data: dataToShow,
  });
});


// API to get subscribers by id
exports.getSingleSub = catchAsyncError(async (req, res) => {
  try {
    const sub = await Subscribers.findById(req.params.id);

    if (!sub) {
      return res.status(404).json({
        success: false,
        message: "Subscriber not found",
      });
    }

    res.status(200).json({
      success: true,
      sub,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching the subscriber.",
      error: error.message,
    });
  }
});
