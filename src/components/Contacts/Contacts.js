import { useSelector, useDispatch } from 'react-redux';
import { deleteSelectedContact } from 'redux/contacts/contacts.thunk';
import { selectContactsList, selectFilter } from 'redux/selectors';
import { Button, Box, Text, List, ListItem, ListIcon } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  const filterByName = useSelector(selectFilter);

  const visibleNames = contacts.filter(
    contact =>
      contact.name &&
      contact.name.toLowerCase().includes(filterByName.toLowerCase())
  );

  const onContactDelete = id => dispatch(deleteSelectedContact(id));

  return (
    <List >
        {visibleNames.length === 0 ? (
        <Text textAlign="center" fontSize="24px" color="#805AD5" my="5">
          Your contact list is empty
        </Text>) :
      (<Box mx="30px">
      {visibleNames.map(contact => (
        <ListItem key={contact.id}>
          <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
            <Box  display="flex" flexDirection="column" alignItems="start" justifyContent="space-between" my="5" >
              <Text fontSize='24px' color='#805AD5'>{contact.name}</Text>{' '}
              <Text fontSize='22px'>
                <ListIcon as={PhoneIcon} />{contact.number}</Text>
            </Box>
           <Button
              colorScheme='purple' variant='solid'  
              type="button"
              onClick={() => onContactDelete(contact.id)}
            >
            Delete
            </Button>
          </Box>
        </ListItem>
      ))}
      </Box>)
    }
    </List>
  );
};
