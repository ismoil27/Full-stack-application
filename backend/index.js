const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const connection = require("./connection");
const userRoute = require("./routes/user");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}...`);
});
