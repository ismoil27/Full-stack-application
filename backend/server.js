const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const connection = require("./connection");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}...`);
});
