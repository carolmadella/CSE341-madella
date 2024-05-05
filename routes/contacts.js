const routes = require("express").Router();

const myController = require("../controllers");

routes.get("/all", myController.allContacts);
routes.get("/single/:id", myController.singleContact);

module.exports = routes;
