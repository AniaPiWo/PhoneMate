import React from "react";
import { Center, Box, Container} from '@chakra-ui/react'
import { UserMenu } from "components/UserMenu/UserMenu";
import { Header } from "components/Header/Header";

export const MyAccount = () => {


    return (
    <Box>
        <Header />
        <Center h="100vh">    
            <Container>
                <UserMenu />
            </Container>
        </Center>
    </Box>
    )
}