import React from "react";

export const Register = () => {
const handleSubmit =  e => {
    e.preventDefault()
    const form = e.currentTarget;
    console.log('form', form);
    form.reset()
}

return (
    <form onSubmit={handleSubmit} autoCoplete="off">
        <label>Username
            <input type="text" name="name"/>
        </label>
        <label>Email
            <input type="email" name="email"/>
        </label>
        <label>Password
            <input type="password" name="password"/>
        </label>
        <bytton type="submit">Register</bytton>
    </form>
)
}