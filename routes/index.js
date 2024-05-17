const routes = require("express").Router();

const myController = require("../controllers");

/**
 * @swagger
 * /contacts/all/:
 *   get:
 *     summary: Get all contacts
 *     description: Retrive all contacts
 *     responses:
 *       200:
 *         description: Successful operation
 *       404:
 *         description: Contacts not found
 */
routes.get("/contacts/all", myController.allContacts);

/**
 * @swagger
 * /contacts/single/{id}:
 *   get:
 *     summary: Get a single contact by id
 *     description: Retrive one contact via the contact id in the url
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true 
 *     responses:
 *       200:
 *         description: Successful operation
 *       404:
 *         description: Contacts not found
 */
routes.get("/contacts/single/:id", myController.singleContact);

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user with the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *             required:
 *               - username
 *               - email
 *     responses:
 *       201:
 *         description: User created successfully
 */
routes.post("/contacts", myController.createContact);

/**
 * @swagger
 * /contacts/single/{id}:
 *   put:
 *     summary: Edit existing contact
 *     description: Edit existing contact with the provided data
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true 
 *     responses:
 *       200:
 *         description: Successful operation
 *       404:
 *         description: Contacts not found
 */
routes.put("/contacts/:id", myController.updateContact);

/**
 * @swagger
 * /contacts/single/{id}:
 *   delete:
 *     summary: Delete contact
 *     description: Delete contact using id 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true 
 *     responses:
 *       200:
 *         description: Successful operation
 *       404:
 *         description: Contacts not found
 */
routes.delete("/contacts/:id", myController.deleteContact);

module.exports = routes;
