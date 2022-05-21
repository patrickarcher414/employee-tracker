const express = require("express");
const router = express.Router();
const db = require("../db/connection");

// Get all depts
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

// Get single dept
router.get("/depts/:id", (req, res) => {
  const sql = `SELECT * FROM depts WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

// Update dept
router.put("/depts/:id", (req, res) => {
  // function
});

// Delete a dept
router.delete("/depts/:id", (req, res) => {
  const sql = `DELETE FROM depts WHERE id = ?`;

  db.query(sql, req.params.id, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: "Party not found",
      });
    } else {
      res.json({
        message: "deleted",
        changes: result.affectedRows,
        id: req.params.id,
      });
    }
  });
});

module.exports = router;
