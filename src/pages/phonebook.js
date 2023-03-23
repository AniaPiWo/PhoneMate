import React from 'react';
import { Header } from 'components/Section/Section';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/contacts/contacts.thunk';
import { Box, Flex } from '@chakra-ui/react';

export const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  });

  return (
    <Box>
    <Header />
    <Flex>
      
      <Box w="30%" borderRight="1px solid #282828">
        <Filter />
        <Contacts />
      </Box>
      <Box w="70%">
  
      </Box>
    </Flex>
  </Box>
  );
};

{/* 

      <Box w="25%">
        <Filter />
      </Box>


<div>
<Header />
  <Container>
  <Form />
  <Filter />
  <Contacts />
  </Container>
</div> */}