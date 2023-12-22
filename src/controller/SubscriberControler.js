const Subscribers = require("../model/subscribers");
const catchAsyncError = require("../../middleware/catchAsyncError");
exports.createSubs = catchAsyncError(async (req, res) => {
  console.log(req.body);
  const subs = await Subscribers.create(req.body);

  res.status(200).json({
    success: true,
    subs,
  });
});
exports.getAllSubs = catchAsyncError(async (req, res) => {
  const subs = await Subscribers.find();
  res.status(200).json({
    success: true,
    subs,
  });
});

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
