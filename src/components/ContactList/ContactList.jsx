import { Contacts } from 'components/Contacts/Contacts';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => {
    return state.contacts.items.filter(el => {
      return el.name.toLowerCase().includes(state.filter.toLowerCase());
    });
  });
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <Contacts contactItem={contact} key={contact.id} />
        ))}
      </ul>
    </>
  );
};
