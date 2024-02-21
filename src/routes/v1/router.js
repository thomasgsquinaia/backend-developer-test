const { Router } = require("express");
const jobs = require("./jobs");
const feed = require("./feed");
const companies = require("./companies");
const router = Router();
router.use("/jobs", jobs);
router.use("/feed", feed);
router.use("/companies", companies);
module.exports = router;
