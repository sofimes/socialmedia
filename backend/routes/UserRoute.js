const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/Authmiddleware");
const { register, login, check } = require("../controller/Usercontroller");
//register route
router.post("/register", register);
//login
router.post("/login", login);
//check user
router.get("/check", authMiddleware, check);

module.exports = router;
