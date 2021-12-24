import { useState } from "react";
import { nanoid } from 'nanoid'
import './App.css';
import Contacts from './contacts.json';
import ContactList from './components/ContactList/ContactList';
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', Contacts);
  const [filter, setFilter] = useState('');  

  const addcontact = ({ name, number }) => {
    const filterName = contacts.find(contact => contact.name === name);

    filterName ? alert(`${name} is already in contacts!`) :
      setContacts(preState => [...preState, { id: nanoid(), name, number }])
  };

  const deleteContact = (nameID) => {
    setContacts(preState => preState.filter(contact => contact.id !== nameID))
  };

  const handleChangeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addcontact} />
        
      <h2>Contacts</h2>
      <Filter
          value={filter}
          onChange={handleChangeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
