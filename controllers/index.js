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

const createContact = async (req, res, next) => {
  // copied from ChatGPT some of the code below
  // Assuming the request body contains the contact information
  const newContact = req.body;
  console.log("Data body", newContact);

  try {
    const db = await mongodb.connectDB();
    const collection = db.collection("contacts");

    // Insert the new contact into the collection
    const result = await collection.insertOne(newContact);
    const contactId = result.insertedId.toString();

    res
      .status(201)
      .json({ message: "Contact inserted successfully", id: contactId });
  } catch (error) {
    console.error("Error inserting contact:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateContact = async (req, res, next) => {
  // copied from ChatGPT some of the code below
  const contactId = req.params.id;
  console.log("Update", contactId);
  try {
    const db = await mongodb.connectDB();
    const collection = db.collection("contacts");

    // Extract the updated contact information from the request body
    const updatedContact = req.body;

    // Update the contact by ID
    const result = await collection.findOneAndUpdate(
      { _id: new mongodb.ObjectId(contactId) },
      { $set: updatedContact },
      { returnNewDocument: true }
    );

    console.log("RESULT", result);

    // Check if the contact was found and updated
    if (!result) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.status(201).json({
      message: "Contact updated successfully",
    });
  } catch (error) {
    console.error("Error updating contact:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteContact = async (req, res, next) => {
  const contactId = req.params.id;
// copied from ChatGPT some of the code below
  try {
    const db = await mongodb.connectDB();
    const collection = db.collection('contacts');

    // Delete the contact by ID
    const result = await collection.findOneAndDelete(
      { _id: new mongodb.ObjectId(contactId) });

    // Check if the contact was found and deleted
    if (!result) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.status(201).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  awesomePerson,
  allContacts,
  singleContact,
  createContact,
  updateContact,
  deleteContact
};
