const express = require("express");
const router = express.Router();

const mainController = require("../controllers/main-controllers");

router.get('/', mainController.home);
module.exports = router;
