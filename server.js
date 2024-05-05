var express = require("express");
var app = express();

app.use("/", require("./routes")); // from previous lesson
app.use("/contacts", require("./routes/contacts.js"));

app.listen(5500, () => {
  console.log("Server is running on Port 5500");
});
