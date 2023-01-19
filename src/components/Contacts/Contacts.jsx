import { deleteContact } from 'Redux/operations';
import { useDispatch } from 'react-redux';

export const Contacts = ({ contactItem }) => {
  const dispatch = useDispatch();
  const del = () => {
    dispatch(deleteContact(contactItem.id));
  };

  return (
    <li id={contactItem.id}>
      <span>{contactItem.name}</span>
      <span>{contactItem.number}</span>
      <button type="button" onClick={del}>
        Delete
      </button>
    </li>
  );
};
