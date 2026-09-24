const express = require("express");
const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

connectDB();

app.use("/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Employee API is running"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 