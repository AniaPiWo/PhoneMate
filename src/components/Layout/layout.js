import { useAuth } from "hook/useAuth/useAuth";
import React from "react";
import {Outlet, useNavigate } from 'react-router-dom'
import { signOut } from "redux/auth/auth.thunk";
import css from './Layout.module.css';
import { useDispatch } from "react-redux";

export const Layout = () => {
  const { isAuthorized } = useAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSignOut = () => dispatch(signOut())

  return (
    <main className={css.layoutBox}>
      <div className={css.header}>
        <div className={css.title}>PhonebookApp</div>
        <nav className={css.nav}>
          {!isAuthorized && (
            <div>
              <button className={css.button} onClick={()=> navigate('login')}>Sign In</button>
              <button className={css.button} onClick={()=> navigate('register')}>Register</button>
            </div>      
          )}
          {isAuthorized && (
            <div>
              <button className={css.button} onClick={()=> navigate('my-account')}>My account</button>
              <button className={css.button} onClick={handleSignOut}>Sign Out</button>
            </div>      
          )}
        </nav>
        </div>
      <Outlet/>
    </main>
  )
};
