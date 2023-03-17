import React from 'react';
import { Section } from 'components/Section/Section';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/contacts/contacts.thunk';

export const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  });

  return (
    <div>
      <Section>
        <Form />
        <Filter />
        <Contacts />
      </Section>
    </div>
  );
};
