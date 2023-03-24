import React from "react";
import { LoginRegister } from "components/LoginRegister/LoginRegister";
import { Center, Flex } from "@chakra-ui/react";

export const Landing = () => {
    return (
            <Center h="100vh">
                <Flex direction="column" alignItems="center">
                    <img src={process.env.PUBLIC_URL + '/phonemate.png'} alt="Logo" />
                    <LoginRegister />
                </Flex>
            </Center> 
    )
}