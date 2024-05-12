var express = require("express");
var bodyParser = require('body-parser')
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/", require("./routes")); // from previous lesson
app.use("/contacts", require("./routes/contacts.js"));

app.listen(5500, () => {
  console.log("Server is running on Port 5500");
});
