const express = require("express");
const {
  createSubs,
  getAllSubs,
  nameOfSubs,
  getSingleSub,
} = require("../controller/SubscriberControler");

const router = express.Router();
router.route("/createSubs").post(createSubs);
router.route("/subscribers").get(getAllSubs);
router.route("/subscribers/name").get(nameOfSubs);

router.route("/sub/:id").get(getSingleSub);

module.exports = router;
