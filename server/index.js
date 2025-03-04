const express = require("express");
const app = express();
const connectDB = require("./db");
const dotenv = require("dotenv");
const cors = require("cors");
const adminRoutes = require("./routes/adminRoutes");
const superAdminRoutes = require("./routes/superAdminRoutes");
const employeeRoutes = require("./routes/employeeRoutes");

dotenv.config();
const PORT = process.env.PORT || 5000;

// Connect to MongoDb;
connectDB();

//middleware
app.use(cors());
app.use(express.json());

// app.use("/api", routes);
app.use("/admin", adminRoutes);
app.use("/superadmin", superAdminRoutes);
app.use("/employee", employeeRoutes);

app.get("/", (req, res) => {
  res.send("HRMS server is Start.");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
