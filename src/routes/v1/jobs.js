const express = require("express")
const router = express.Router();
const jobController = require("../../controllers/jobs")

router.post("/", jobController.createJob);
router.put("/:job_id/publish", jobController.updatePublishJob);
router.put("/:job_id", jobController.updateJob);
router.put("/:job_id/archive", jobController.updateArchiveJob);
router.delete("/:job_id", jobController.deleteJob);

module.exports = router;