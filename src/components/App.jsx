import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Register } from 'pages/register';
import { SignIn } from 'pages/sign-in';
import { Landing } from 'pages/landing';
import { Phonebook } from 'pages/phonebook';
//import { Layout } from './Layout/LoginRegister';
import { Fail } from 'pages/404.js';
import { refreshUser } from 'redux/auth/auth.thunk.js';
import { useAuth } from 'hook/useAuth/useAuth.js';
import { ProtectedRoute } from './protectedRoute.js';
import { RestrictedRoute } from './restrictedRoute.js';
import { MyAccount } from 'pages/my-account.js';
import { Text, Center } from '@chakra-ui/react';

export const App = () => {
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth()

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? <Center><Text>Loading...</Text></Center> : (
    <div>

      <Routes>
  
          <Route index element={<Landing />} />
          <Route 
            path="/register" 
            element={<RestrictedRoute component={<Register/>}/>} />
          <Route 
            path="/login" 
            element={<RestrictedRoute component={<SignIn />}/>} />
          <Route 
            path="/phonebook" 
            element={<ProtectedRoute component={<Phonebook/>} redirectTo={'/login'} />} />
          <Route 
            path="/my-account" 
            element={<ProtectedRoute component={<MyAccount/>} redirectTo={'/my-account'} />} />
          <Route 
            path="/*" 
            element={<Fail />} />

      </Routes>

    </div>
  );
};



/* <Routes>
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route 
    path="/register" 
    element={<RestrictedRoute component={<Register/>}/>} />
  <Route 
    path="/login" 
    element={<RestrictedRoute component={<SignIn />}/>} />
  <Route 
    path="/phonebook" 
    element={<ProtectedRoute component={<Phonebook/>} redirectTo={'/login'} />} />
  <Route 
    path="/my-account" 
    element={<ProtectedRoute component={<UserMenu/>} redirectTo={'/login'} />} />
  <Route 
    path="/*" 
    element={<Fail />} />
</Route>
</Routes> */