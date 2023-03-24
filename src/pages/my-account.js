import React from "react";
import { Center, Box, Container} from '@chakra-ui/react'
import { UserMenu } from "components/UserMenu/UserMenu";
import { Header } from "components/Header/Header";

export const MyAccount = () => {


    return (
    <Box height="1000vh" maxW='600px' backgroundColor="white">
        <Header />
        <Center h="80vh">    
            <Container>
                <UserMenu />
            </Container>
        </Center>
    </Box>
    )
}