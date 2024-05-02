const routes = require ('express').Router();

const myController = require('../controllers');

routes.get('/', myController.awesomePerson);

module.exports = routes;