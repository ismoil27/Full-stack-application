const express = require("express");

const cron = require("node-cron");

cron.schedule("*/2 * * * *", () => {
  console.log("code is running");
});
