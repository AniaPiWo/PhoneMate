import React from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "redux/auth/auth.thunk";
import { Container, Button, Text, Center, Stack } from '@chakra-ui/react'


export const UserMenu = () => {

    const dispatch = useDispatch()
    const handleSignOut = () => dispatch(signOut())

    const authData = JSON.parse(localStorage.getItem('persist:auth'));
    const userData = JSON.parse(authData.user);
    const name = userData.name;
    const email = userData.email;
    
    //console.log('Name:', name);
    //console.log('Email:', email);

    return (
        <Container >
            <Center>
                <Stack spacing={4}>
                    <Text fontSize='4xl'>Witaj, {name} !</Text>
                    <Text fontSize='3xl'>Twój mail to {email}</Text>
                    <Center>
                        <Button mt={30} w={300} colorScheme='purple' variant='solid'  type="submit" onClick={handleSignOut}>Logout</Button>
                        </Center>
                </Stack>
            </Center>
            <Outlet/>
        </Container>
    )
}


