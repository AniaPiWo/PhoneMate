import React from "react";
import { useDispatch } from "react-redux";
import { signIn } from "redux/auth/auth.thunk";

export const SignIn = () => {

    const dispatch = useDispatch() 

    const handleSubmit =  e => {
        e.preventDefault()
        const form = e.currentTarget;
        dispatch(signIn({
            password: form.elements.password.value,
            email: form.elements.email.value,
        }))
        form.reset()
    }

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit} autoComplete="off">
                <label>Email
                    <input type="email" name="email"/>
                </label>
                <label>Password
                    <input type="password" name="password"/>
                </label>
                <button className="log-button" type="submit">Log in</button>
            </form>
        </div>
    )
}