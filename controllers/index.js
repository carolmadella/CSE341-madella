const mongodb = require("../mongo.js");

const awesomePerson = (req, res, next) => {
  res.json("Regina Barion");
};

const allContacts = async (req, res, next) => {
  // copied from ChatGPT the code below
  try {
    const db = await mongodb.connectDB();

    // Get a reference to the collection
    const collection = db.collection("contacts");

    // Find documents in the collection
    const contacts = await collection.find().toArray();

    console.log(contacts);

    res.json(contacts);
  } catch (err) {
    console.error("Error reading documents:", err);
  }
};

const singleContact = async (req, res, next) => {
  const contactId = req.params.id; // Extract the _id from the URL

  console.log("CONTACT ID", contactId);

  // copied from ChatGPT the code below
  try {
    const db = await mongodb.connectDB();

    // Get a reference to the collection
    const collection = db.collection("contacts");

    const contact = await collection.findOne({
      _id: new mongodb.ObjectId(contactId), // Use ObjectID from the imported module
    });

    if (!contact) {
      return res.status(404).json({ error: "contact not found" });
    }
    res.json(contact);
  } catch (err) {
    console.error("Error reading documents:", err);
  }
};

module.exports = { awesomePerson, allContacts, singleContact };
