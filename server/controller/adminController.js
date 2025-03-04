const Admin = require("../model/Admin.js");
const bcrypt = require("bcryptjs");

// **1️⃣ Register a New Admin**
exports.registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if admin already exists
    let admin = await Admin.findOne({ email });
    if (admin) return res.status(400).json({ message: "Admin already exists" });

    // Create a new admin
    admin = new Admin({ name, email, password });
    await admin.save();

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// **2️⃣ Login Admin**
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: "Invalid credentials" });

    // Check password
    const isMatch = await admin.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
