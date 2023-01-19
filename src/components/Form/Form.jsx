import { addContact } from 'Redux/operations';
import { selectContacts } from 'Redux/selectors';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handelInputChange = evt => {
    const { name, value } = evt.target;

    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const onSubmitForm = evt => {
    evt.preventDefault();
    if (contacts.some(el => el.name.toLowerCase() === name.toLowerCase())) {
      return alert(`We already have ${name}`);
    }
    dispatch(addContact({ name: name, number: number }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={onSubmitForm}>
      <label id={nameInputId}>Name</label>
      <input
        value={name}
        onChange={handelInputChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id={nameInputId}
      />
      <label id={numberInputId}>Number</label>
      <input
        value={number}
        onChange={handelInputChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id={numberInputId}
      />
      <button type="submit">Add contacts</button>
    </form>
  );
};
