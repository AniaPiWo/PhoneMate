import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "redux/auth/auth.thunk";
import css from "./UserMenu.module.css"

export const UserMenu = () => {


    const dispatch = useDispatch()
    const handleSignOut = () => dispatch(signOut())
    return (
            <div className={css.wrapper} >
                <h1 className={css.title} >Email</h1>
                <button className={css.button} onClick={handleSignOut}>Logout</button>
            </div>
    )
}


