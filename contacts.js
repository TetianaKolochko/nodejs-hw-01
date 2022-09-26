const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, '/db/contacts.json');

const updateContact = async contacts => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
};
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async id => {
  const contact = await listContacts();
  const result = contact.find(contact => contact.id === id);
  return result;
};

const removeContact = async id => {
  const contacts = await listContacts();
  const index = contacts.findIndex(contact => contact.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await updateContact(contacts);
  return result;
};

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await updateContact(contacts);
  return newContact;
};
module.exports = { listContacts, getContactById, removeContact, addContact };
