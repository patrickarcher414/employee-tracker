const express = require("express");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

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
