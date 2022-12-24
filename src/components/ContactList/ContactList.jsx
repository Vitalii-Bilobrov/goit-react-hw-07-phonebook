import { Contacts } from 'components/Contacts/Contacts';

export const ContactList = ({ filteredlist, onDeleteContact }) => {
  return (
    <>
      <ul>
        {filteredlist.map(contact => (
          <Contacts
            contactItem={contact}
            key={contact.id}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </>
  );
};
