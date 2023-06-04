const express = require("express");
const { creatUser } = require("../controller/userCtrl");
const router = express.Router();


router.post("/register",creatUser);
module.exports = router;