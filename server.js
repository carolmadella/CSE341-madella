var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CSE341 API",
      version: "1.0.0",
    },
    servers: [{ url: "http://localhost:5500" }],
  },
  apis: ["./routes/*.js"], // Use a glob pattern to include all route files
};

const swaggerSpecs = swaggerJsdoc(options);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Routes configuration
app.use("/", require("./routes"));

// Serve Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.listen(5500, () => {
  console.log("Server is running on Port 5500");
});
