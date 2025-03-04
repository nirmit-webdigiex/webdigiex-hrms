const express = require("express");
const router = express.Router();
const { registerEmployee, loginEmployee, getAllEmployees } = require("../controller/employeeController");

// Register Employee
router.post("/register", registerEmployee);

// Login Employee
router.post("/login", loginEmployee);

// Get All Employees
router.get("/all", getAllEmployees);

module.exports = router;
