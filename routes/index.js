const routes = require("express").Router();

const myController = require("../controllers");


routes.get("/contacts", myController.allContacts);


routes.get("/contacts/:id", myController.singleContact);


routes.post("/contacts", myController.createContact);


routes.put("/contacts/:id", myController.updateContact);


routes.delete("/contacts/:id", myController.deleteContact);

module.exports = routes;
