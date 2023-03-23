import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from 'redux/contacts/contacts.thunk';
import { selectContactsList } from 'redux/selectors';
import { Box, Input, FormLabel  } from '@chakra-ui/react'

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const onSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const latestId = Math.max(...contacts.map(contact => contact.id));
    const nameValue = form.elements.text.value;
    const numberValue = form.elements.number.value;
    dispatch(
      addNewContact({ id: latestId + 1, name: nameValue, number: numberValue })
    );
    form.reset();
  };

  return (
    <Box>
    <form  onSubmit={onSubmit}>
      <FormLabel >
        Name
        <Input
    
          type="text"
          name="text"
          placeholder="Enter your name..."
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>

      <FormLabel >
        Phone Number
        <Input

          type="tel"
          name="number"
          placeholder="Enter your phone number..."
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
           </FormLabel >

      <button type="submit">
        Add contact
      </button>
    </form>
    </Box>
  );
};
