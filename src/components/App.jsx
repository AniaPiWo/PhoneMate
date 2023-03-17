import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux/contacts/contacts.thunk';
import { Register } from 'pages/register';
import { SignIn } from 'pages/sign-in';
import { Home } from 'pages/home';
import { Phonebook } from 'pages/phonebook';
import { Layout } from './Layout/Layout';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div>
    <Layout />
    <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/phonebook" element={<Phonebook />} />
    </Routes>
    </div>
  );
};
