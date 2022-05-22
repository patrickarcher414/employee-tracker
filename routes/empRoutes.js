const express = require("express");
const router = express.Router();
const db = require("../server");

// Get all depts
const getEmps = () => {
  router.get("/employees", (req, res) => {
    const sql = `SELECT * FROM depts`;

    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: "success",
        data: rows,
      });
    });
  });
};

// Add dept
const addEmp = () => {
  router.post("/employees", (req, res) => {
    const sql = `INSERT INTO employees (first_name, last_name)`;

    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: "success",
        data: rows,
      });
    });
  });
};

module.exports = router;
