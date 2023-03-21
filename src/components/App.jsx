import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Register } from 'pages/register';
import { SignIn } from 'pages/sign-in';
import { Home } from 'pages/home';
import { Phonebook } from 'pages/phonebook';
import { Layout } from './Layout/Layout';
import { Fail } from 'pages/404';
import { refreshUser } from 'redux/auth/auth.thunk';
import { useAuth } from 'hook/useAuth/useAuth';
import { ProtectedRoute } from './protectedRoute';
import { RestrictedRoute } from './restrictedRoute';
import { UserMenu } from './UserMenu/UserMenu';

export const App = () => {
  const dispatch = useDispatch();
  const {isRefreshing} = useAuth()

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? <div>Loading...</div> : (
    <div>

      <Routes>
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
      </Routes>

    </div>
  );
};
