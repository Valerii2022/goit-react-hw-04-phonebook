import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { useLocalStorage } from 'hooks/LocaleStorage';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', '');
  const [filter, setFilter] = useState('');

  const handleFindNameInput = e => {
    setFilter(e.currentTarget.value);
  };

  const handleAddContacts = (contactName, contactNumber) => {
    const addedName = contacts.some(
      contact => contact.name.toLowerCase() === contactName.toLowerCase()
    );

    if (addedName) {
      return alert(`${contactName} is already in contacts`);
    }

    const id = nanoid(10);
    setContacts([
      ...contacts,
      { name: contactName, id: id, number: contactNumber },
    ]);
  };

  const handleContactsDelete = e => {
    const names = contacts.filter(contact => contact.id !== e.currentTarget.id);
    setContacts([...names]);
  };

  const renderNames = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleAddContacts={handleAddContacts} />
      <h2>Contacts</h2>
      <Filter filter={filter} findName={handleFindNameInput} />
      <ContactList
        contacts={renderNames}
        handleContactsDelete={handleContactsDelete}
      />
    </>
  );
};
