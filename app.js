const express = require("express");
const dotenv = require("dotenv").config();
const db = require("./config/db");
const cors = require("cors");

const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

try {
  app.use(express.json());

  app.use(express.urlencoded({ extended: false }));

  // Routes
  app.use("/api/blogs", require("./routes/blogRoutes"));
  app.use("/api/v1/setData", require("./routes/blogRoutes"));
  app.use("/", require("./routes/blogRoutes"));
} catch (err) {
  console.log(err.message);
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on port ${port}`));
