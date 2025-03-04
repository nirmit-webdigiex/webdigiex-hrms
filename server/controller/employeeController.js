const Employee = require("../model/Employee");
const bcrypt = require("bcryptjs");


// Register Employee
exports.registerEmployee = async (req, res) => {
  try {
    const { name, email, password, department, position } = req.body;

    // Check if Employee already exists
    let employee = await Employee.findOne({ email });
    if (employee) {
      return res.status(400).json({ message: "Employee already exists" });
    }

    // Create new Employee
    employee = new Employee({ name, email, password, department, position });
    await employee.save();

    res.status(201).json({ message: "Employee registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Employee Login
exports.loginEmployee = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find Employee
    const employee = await Employee.findOne({ email });
    if (!employee) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, employee.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get All Employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
