import { Component } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notification } from './Notification/Notification';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const isInContacts = this.state.contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    if (isInContacts) {
      alert('Already included');
      return;
    }

    const newContact = { ...data, id: nanoid() };

    this.setState(prevState => {
      return { contacts: [newContact, ...prevState.contacts] };
    });
  };

  onFilterContacts = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  filterArrContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(current =>
      current.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onDeleteContact = id => {
    return this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(contact => contact.id !== id),
        filter: '',
      };
    });
  };

  render() {
    const filterContacts = this.filterArrContacts();
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <Form onSubmit={this.formSubmitHandler} />
        </div>
        <div>
          {filterContacts.length > 0 ? (
            <>
              <h2>Contacts</h2>
              <Filter
                filter={this.onFilterContacts}
                value={this.state.filter}
              />
              <ContactList
                filteredlist={filterContacts}
                onDeleteContact={this.onDeleteContact}
              />
            </>
          ) : (
            <Notification message="There is no any contacts - create the first one!" />
          )}
        </div>
      </>
    );
  }
}
