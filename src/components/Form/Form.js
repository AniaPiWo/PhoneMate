import { useDispatch, useSelector } from 'react-redux';
import { addNewContact } from 'redux/contacts/contacts.thunk';
import { selectContactsList } from 'redux/selectors';
import { Box, Input, FormLabel, Button, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, } from '@chakra-ui/react'; 

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
    }

  return (
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem backgroundColor='#805AD5'>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='center' color='white' fontSize='24px'    backgroundColor='#805AD5'>
              Add new contact
            </Box>
            <AccordionIcon color='white' />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Box>
            <form onSubmit={onSubmit}>
              <FormLabel  color='white' >
                Name
              <Input
                _placeholder={{ color: 'white' }}        
                type="text"
                name="text"
                placeholder="Enter name..."
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
              </FormLabel>
              <FormLabel  color='white' >
                Phone Number
              <Input
                _placeholder={{ color: 'white' }}              
                type="tel"
                name="number"
                placeholder="Enter phone number..."
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
              </FormLabel >
              <Button colorScheme='whatsapp' variant='solid'   type="submit">
                Add contact
              </Button>
            </form>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    ) 
}
