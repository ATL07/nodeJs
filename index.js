const express = require("express");
const app = express();

const ipFilter = require('express-ip-filter')
const whiteListIps = ["*:5.57.21.8"];

var forbiddenMessage = "You are not authorized to access this page!";

app.get("/", ipFilter({ forbidden: forbiddenMessage, filter: whiteListIps }), function (request, response) {
    response.send("Welcome to the homepage");
});

app.listen("3000", function () {
    console.log("Server started on the port 3000");
});