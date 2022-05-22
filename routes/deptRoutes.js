const express = require("express");
const router = express.Router();
const db = require("../server");

// Get all depts
const getDepts = () => {
  router.get("/depts", (req, res) => {
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
const addDept = () => {
  router.post("/depts", (req, res) => {
    const sql = `INSERT INTO depts (dept_name)`;

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
