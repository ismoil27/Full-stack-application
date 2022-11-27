const express = require("express");
const cors = require("cors");

const axios = require("axios");

const cron = require("node-cron");

// const bodyParser = require("body-parser");

// const cron = require("node-cron");

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

// function getBlogs() {
//   axios
//     .post("http://211.225.14.76:8080/server/getChatUsersList")
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// cron.schedule("*/2 * * * * *", () => {
//   console.log("running a task in 3 seconds");
//   getBlogs();
// });

app.listen(port, () => console.log(`Server listening on port ${port}`));
