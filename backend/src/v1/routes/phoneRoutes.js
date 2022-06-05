const express = require("express");
const phoneController = require("../../controllers/phoneController");

const router = express.Router();

router.get("/", phoneController.getAllPhones);
router.get("/:phoneId", phoneController.getOnePhoneById);

router.post("/", phoneController.createNewPhone);
router.delete("/:phoneId", phoneController.deleteOnePhone);

module.exports = router;
