const routes = require("express").Router();

const myController = require("../controllers");

routes.get("/", myController.awesomePerson); // from previous class

module.exports = routes;
