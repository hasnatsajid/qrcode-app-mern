var express = require("express");
// var authRouter = require("./auth");
var qrcodeRouter = require("./qrCode");
var orderRouter = require("./order");

var app = express();

app.use("/v1/order/", orderRouter);
app.use("/v1/qrCode/", qrcodeRouter);

module.exports = app;
