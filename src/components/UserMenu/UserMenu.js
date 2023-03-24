import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "redux/auth/auth.thunk";
import { Button, Text, Center, Stack } from '@chakra-ui/react'
import {useNavigate } from 'react-router-dom'

export const UserMenu = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSignOut = () => dispatch(signOut())

    const authData = JSON.parse(localStorage.getItem('persist:auth'));
    const userData = JSON.parse(authData.user);
    const name = userData.name;
    const email = userData.email;
    
    //console.log('Name:', name);
    //console.log('Email:', email);

    return (
        <Stack spacing={4}>
            <Text fontSize='5xl'>Hello, {name} !</Text>
            <Text fontSize='3xl'>Your email is {email}</Text>
            <Center display="flex" justifyContent="space-evenly">
                <Button mt={30} w={180} colorScheme='purple' variant='solid'  type="submit" onClick={handleSignOut}>Logout</Button>
                <Button  mt={30} w={180}  colorScheme='purple' variant='solid' onClick={()=> navigate('/phonebook')}>Your PhoneMate</Button>
            </Center>
        </Stack>
    )
}

