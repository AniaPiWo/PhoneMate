import React from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth.thunk";
import { Center,  Container, Button, Stack, Input, /*  FormControl, */
    FormLabel } from '@chakra-ui/react'

export const Register = () => {

    const dispatch = useDispatch()

    const handleSubmit =  e => {
        e.preventDefault()
        const form = e.currentTarget;
        dispatch(register({
            name: form.elements.name.value,
            password: form.elements.password.value,
            email: form.elements.email.value,
        }))
        form.reset()
    }

    return (
        <Center h="100vh">
            <Container>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <Stack spacing={3}>
                        <FormLabel w="100%">Username
                            <Input type="text" name="name"/>
                        </FormLabel>
                        <FormLabel w="100%">Email
                                <Input type="email" name="email" />
                        </FormLabel>
                        <FormLabel  w="100%">Password
                                <Input type="password" name="password"/>
                            </FormLabel>
                            <Center>
                                <Button mt={30} w={300} colorScheme='purple' variant='solid'  type="submit">Register</Button>
                            </Center>
                        </Stack>
                    </form>
                </Container>
            </Center>

    )
}