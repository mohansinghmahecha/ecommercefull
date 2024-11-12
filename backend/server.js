const express = require("express");
const dotenv = require("dotenv");
require("../backend/connect/ConnectMongo"); // This will initialize the MongoDB connection
const expressrouter = require('../backend/router')


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Example route , for home page 
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(expressrouter)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
