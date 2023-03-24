import React from 'react';
import { Header } from 'components/Header/Header';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/contacts/contacts.thunk';
import { Box, Grid, GridItem } from '@chakra-ui/react';

export const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  });

  return (
<Box>
  <Header />
  <Grid templateColumns="repeat(4, 1fr)">
    <GridItem as="aside" colSpan={1} minHeight="100vh" borderRight="1px solid #282828" overflowY="visible">
      <Form />
      <Filter />
      <Contacts />
    </GridItem>
    <GridItem colSpan={3}></GridItem>
  </Grid>
</Box>
  );
};