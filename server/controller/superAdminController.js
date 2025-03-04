const SuperAdmin = require("../model/SuperAdmin");
const bcrypt = require("bcryptjs");

// Super Admin Registration
exports.registerSuperAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if Super Admin already exists
    let superAdmin = await SuperAdmin.findOne({ email });
    if (superAdmin) {
      return res.status(400).json({ message: "Super Admin already exists" });
    }

    // Create new Super Admin
    superAdmin = new SuperAdmin({ name, email, password });
    await superAdmin.save();

    res.status(201).json({ message: "Super Admin registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Super Admin Login
exports.loginSuperAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find Super Admin
    const superAdmin = await SuperAdmin.findOne({ email });
    if (!superAdmin) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, superAdmin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
