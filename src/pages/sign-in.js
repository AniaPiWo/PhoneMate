import React from "react";

export const SignIn = () => {
const handleSubmit =  e => {
    e.preventDefault()
    const form = e.currentTarget;
    console.log('form', form);
    form.reset()
}

return (
    <form onSubmit={handleSubmit} autoCoplete="off">
        <label>Email
            <input type="email" name="email"/>
        </label>
        <label>Password
            <input type="password" name="password"/>
        </label>
        <bytton type="submit">Log in</bytton>
    </form>
)
}