const express = require("express");
const router = express.Router();

const authController = require("./../controllers/authController");
const userController = require("../controllers/userController");

router.post("/login", authController.login);
router.post("/signup", userController.createUser);
router.get("/", userController.getProfile);

// Protect all routes after this middleware
router.use(authController.protect);


module.exports = router;
