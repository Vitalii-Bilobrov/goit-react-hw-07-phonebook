import { selectContacts, selectFilter } from 'Redux/selectors';
import { Contacts } from 'components/Contacts/Contacts';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(el => {
    return el.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <ul>
        {filteredContacts.map(contact => (
          <Contacts contactItem={contact} key={contact.id} />
        ))}
      </ul>
    </>
  );
};
