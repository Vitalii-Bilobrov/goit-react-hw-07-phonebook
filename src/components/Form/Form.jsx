// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

// export class Form extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameInputId = nanoid();
//   numberInputId = nanoid();

//   handelInputChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   onSubmitForm = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };
//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.onSubmitForm}>
//         <label id={this.nameInputId}>Name</label>
//         <input
//           value={this.state.name}
//           onChange={this.handelInputChange}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           id={this.nameInputId}
//         />
//         <label id={this.numberInputId}>Number</label>
//         <input
//           value={this.state.number}
//           onChange={this.handelInputChange}
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           id={this.numberInputId}
//         />
//         <button type="submit">Add contacts</button>
//       </form>
//     );
//   }
// }
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handelInputChange = evt => {
    const { name, value } = evt.target;

    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const onSubmitForm = evt => {
    evt.preventDefault();
    onSubmit({ name, number });
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
