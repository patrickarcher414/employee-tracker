const express = require("express");
const router = express.Router();
const db = require("../server");

// Get all depts
const getRoles = () => {
  router.get("/roles", (req, res) => {
    const sql = `SELECT * FROM roles`;

    db.query(sql, (err, res) => {
      console.table(res);
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
const addRole = () => {
  router.post("/roles", (req, res) => {
    const sql = `INSERT INTO roles (title, salary, depts_id)
    VALUES (req.params.)`;

    db.query(sql, (err, res) => {
      console.table(res);
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
