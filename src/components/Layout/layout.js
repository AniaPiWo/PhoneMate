import React from "react";
import css from './Layout.module.css';

export const Layout = () => {

  return (
    <main className={css.layoutBox}>
      <div className={css.title}>PhonebookApp</div>
      <nav className={css.nav}>
        <button className={css.button}>Sign In</button>
        <button className={css.button}>Register</button>
        <button className={css.button}>Sign Out</button>
      </nav>
    </main>
  )
};
