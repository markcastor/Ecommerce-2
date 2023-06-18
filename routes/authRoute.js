const express = require("express");
const { creatUser, loginUserCtrl, getallUser, getaUser, deleteaUser } = require("../controller/userCtrl");
const router = express.Router();


router.post("/register",creatUser);
router.post("/login", loginUserCtrl);
router.get("/all-users",getallUser);
router.get("/:id",getaUser);
router.get("/:id",deleteaUser);
module.exports = router;