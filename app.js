const express = require("express");
<<<<<<< HEAD
=======
// const dotenv = require("dotenv").config();
>>>>>>> 8d2e337ddca400b7b4eded677135bf035447bbc2
const cors = require("cors");

// const bodyParser = require("body-parser");

// const cron = require("node-cron");

const { errorHandler } = require("./middleware/errorMiddleware");
<<<<<<< HEAD
const port = 5000;
=======
const port = process.env.PORT || 8000;
>>>>>>> 8d2e337ddca400b7b4eded677135bf035447bbc2

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

// app.use((req, res, next) => {
//   const userAgentsRequiringRawBody = [
//     "(http://211.225.14.76:8080/server/getChatUsersList)",
//   ];

//   if (userAgentsRequiringRawBody.includes(req.headers["user-agent"])) {
//     return bodyParser.raw({ type: "*/*", limit: "50mb" })(req, res, next);
//   }

<<<<<<< HEAD
//   // return bodyParser.json({ limit: "50mb" })(req, res, next);
=======
//   return bodyParser.json({ limit: "50mb" })(req, res, next);
>>>>>>> 8d2e337ddca400b7b4eded677135bf035447bbc2
// });

app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on port ${port}`));
