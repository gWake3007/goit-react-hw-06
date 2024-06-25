import "./App.css";
import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const contactsState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) || contactsState
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [search, setSearch] = useState("");
  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const submitForm = (newUser) => {
    setContacts([...contacts, newUser]);
  };

  const deleteContact = (contactId) => {
    setContacts([...contacts.filter((contact) => contact.id !== contactId)]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={submitForm} />
      <SearchBox value={search} onFilter={setSearch} />
      <ContactList datalist={visibleContact} onDelete={deleteContact} />
    </div>
  );
}

export default App;
