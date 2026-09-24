const Employee = require("../models/Employee");

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();

    res.status(200).json({
      success: true,
      message: "Employees fetched successfully",
      count: employees.length,
      data: employees
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Database error",
      error: error.message
    });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);

    res.status(201).json({
      success: true,
      message: "Employee created successfully",
      data: employee
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Employee creation failed",
      error: error.message
    });
  }
};
