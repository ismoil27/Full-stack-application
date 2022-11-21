// const express = require("express");

const cron = require("node-cron");

cron.schedule("*/2 * * * *", () => {
  console.log("running a task every two seconds");
});
