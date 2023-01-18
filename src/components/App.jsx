import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { useSelector } from 'react-redux';
import { selectContacts } from 'Redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <Form />
      </div>
      <div>
        <h2>Contacts</h2>
        {contacts.length ? (
          <>
            <Filter />
            <ContactList />
          </>
        ) : (
          <p>You dont have any contacts yet</p>
        )}
      </div>
    </>
  );
};
