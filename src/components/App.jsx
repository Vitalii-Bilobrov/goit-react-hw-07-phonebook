import { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notification } from './Notification/Notification';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const isInContacts = contacts.find(
      contact => name.toLowerCase() === contact.name.toLowerCase()
    );
    if (isInContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prev => [newContact, ...prev]);
  };

  const filterArrContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDeleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  const onFilterContacts = evt => setFilter(evt.target.value);

  const filterContacts = filterArrContacts();

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={formSubmitHandler} />
      </div>
      <div>
        {filterContacts.length > 0 ? (
          <>
            <h2>Contacts</h2>
            <Filter filter={onFilterContacts} value={filter} />
            <ContactList
              filteredlist={filterContacts}
              onDeleteContact={onDeleteContact}
            />
          </>
        ) : (
          <Notification message="There is no any contacts - create the first one!" />
        )}
      </div>
    </>
  );
};
