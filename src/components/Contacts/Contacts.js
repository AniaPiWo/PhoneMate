import { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { deleteSelectedContact } from 'redux/contacts/contacts.thunk';
import { selectContactsList, selectFilter } from 'redux/selectors';
import { Button, Box, Text, List, ListItem} from '@chakra-ui/react'
import { BsFillTrash3Fill } from "react-icons/bs";
import { SuccessDeleteAlert } from 'components/Alerts/successDeleteAlert';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Avatar
} from '@chakra-ui/react'

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);
  const filterByName = useSelector(selectFilter);
  const [showAlert, setShowAlert] = useState(false);

  const visibleNames = contacts.filter(
    contact =>
      contact.name &&
      contact.name.toLowerCase().includes(filterByName.toLowerCase())
  );

  
  const onContactDelete = id => {
    dispatch(deleteSelectedContact(id));
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };


  return (
    <List >
      {showAlert && <SuccessDeleteAlert />}
        {visibleNames.length === 0 ? (

        <Text textAlign="center" fontSize="24px" color="#805AD5" my="5">
          Your contact list is empty
        </Text>

        ) :
      (<Box mx="20px">
      {visibleNames.map(contact => (
        <ListItem 
          border="1px solid #805AD5" 
          borderRadius="20px"
          px="15px"
          py="5px"
          my="20px"
          key={contact.id}>
          <Box
              display="flex" 
              flexDirection="row" 
              alignItems="center" 
              justifyContent="space-between"
               >
              
              <Box>
                <Text fontSize='24px' color='#805AD5'>Name: {contact.name}</Text>{' '}
                <Text fontSize='22px'>Phone: {contact.number}</Text>
                </Box>
              
              <Button
              colorScheme='purple' variant='solid'  
              type="button"
              onClick={() => onContactDelete(contact.id)}
             ><BsFillTrash3Fill />
            </Button>
          </Box>
            <Accordion allowToggle>
              <AccordionItem>
              <h2>
              <AccordionButton bg='white' borderBottomLeftRadius="20px" 
              borderBottomRightRadius="20px" borderTop="1px solid black">   <AccordionIcon color='#805AD5'/>
                <Box as="span" flex='1' textAlign='left' color='#805AD5' px="10px">
                  More Details </Box>
              </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box display="flex" gap="20px" alignItems="center">
                <Avatar src='https://bit.ly/broken-link' />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </ListItem>
      ))}
      </Box>)
    }
    </List>
  );
};


