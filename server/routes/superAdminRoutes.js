const express = require("express");
const router = express.Router();
const {
  registerSuperAdmin,
  loginSuperAdmin,
} = require("../controller/superAdminController");

// Register Super Admin
router.post("/register", registerSuperAdmin);

// Login Super Admin
router.post("/login", loginSuperAdmin);

module.exports = router;
