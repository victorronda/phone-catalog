const express = require("express");
const phoneController = require("../../controllers/phoneController");

const router = express.Router();

router.get("/", phoneController.getAllPhones);

module.exports = router;
