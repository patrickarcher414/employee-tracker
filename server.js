const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

const routes = require("./routes");
const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: "localhost",
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/routes", routes);

// Default error response for any request not found
app.use((req, res) => {
  res.status(404).end();
});

// Start server after connecting to database
db.connect((err) => {
  if (err) throw err;
  console.log("Database created and in use");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

prompt();
