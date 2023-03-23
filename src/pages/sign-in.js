import React from "react";
import { useDispatch } from "react-redux";
import { signIn } from "redux/auth/auth.thunk";
import { Center,  Container, Button, Stack, Input,  FormControl,
    FormLabel } from '@chakra-ui/react'

export const SignIn = () => {

    const dispatch = useDispatch() 

    const handleSubmit =  e => {
        e.preventDefault()
        const form = e.currentTarget;
        dispatch(signIn({
            password: form.elements.password.value, 
            email: form.elements.email.value
        }))
        form.reset()
    }


    return (
        <Center h="100vh">
            <Container>
                <FormControl onSubmit={handleSubmit} autoComplete="off">
                    <Stack spacing={3}>
                        <FormLabel w="100%">Email
                            <Input type="email" name="email" />
                        </FormLabel>
                        <FormLabel  w="100%">Password
                            <Input type="password" name="password"/>
                        </FormLabel>
                        <Center>
                            <Button mt={30} w={300} colorScheme='purple' variant='solid'  type="submit">Log in</Button>
                        </Center>
                    </Stack>
                </FormControl>
            </Container>
        </Center>
    )
}
