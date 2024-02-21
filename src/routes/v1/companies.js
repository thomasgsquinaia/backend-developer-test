const express = require("express")
const router = express.Router();
const companiesController = require("../../controllers/companies")

router.get("/", companiesController.getCompanies);
router.get("/:id", companiesController.getFindByIdCompany);

module.exports = router;