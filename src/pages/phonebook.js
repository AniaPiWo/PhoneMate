import React, { useState, useEffect } from 'react';
import { Header } from 'components/Header/Header';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';
import { useDispatch } from 'react-redux';
import { fetchContactsThunk } from 'redux/contacts/contacts.thunk';
import { Box } from '@chakra-ui/react';
import { SuccessLoginAlert } from 'components/Alerts/successLoginAlert';

export const Phonebook = () => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false); 

  useEffect(() => {
    dispatch(fetchContactsThunk());
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
    }, [dispatch]);


  return (
    <Box height="100vh" maxW='600px' backgroundColor="white">
      <Header />
      <Box overflowY="auto">
        <Form />
        <Filter />
        {showAlert && <SuccessLoginAlert />}
        <Contacts />
      </Box>
    </Box>
  );
};

