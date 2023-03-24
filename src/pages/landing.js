import React from "react";
import { LoginRegister } from "components/LoginRegister/LoginRegister";
import { Center, Flex, Container } from "@chakra-ui/react";

export const Landing = () => {
    return (
        <Container height="100vh" backgroundColor="white">
            <Center h="80vh">
                <Flex direction="column" alignItems="center">
                    <img src={process.env.PUBLIC_URL + '/phonemate.png'} alt="Logo" />
                    <LoginRegister />
                </Flex>
            </Center> 
        </Container>
    )
}