export const Contacts = ({ contactItem, onDeleteContact }) => {
  return (
    <li id={contactItem.id}>
      <span>{contactItem.name}</span>
      <span>{contactItem.number}</span>
      <button
        type="button"
        onClick={() => {
          onDeleteContact(contactItem.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};
