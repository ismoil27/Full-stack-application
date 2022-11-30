const express = require("express");
const cors = require("cors");

const cron = require("node-cron");

const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 8080;

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/blogs", require("./routes/blogRoutes"));
app.use("/api/v1/setData", require("./routes/blogRoutes"));
app.use("/", require("./routes/blogRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on port ${port}`));
