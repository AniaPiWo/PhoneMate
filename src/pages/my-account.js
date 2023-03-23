import React from "react";
import { Center,  Container} from '@chakra-ui/react'
import { UserMenu } from "components/UserMenu/UserMenu";
import { Header } from "components/Section/Section";

export const MyAccount = () => {


    return (
    <div>
        <Header />
        <Center h="100vh">    
            <Container>
                <UserMenu />
            </Container>
        </Center>
        </div>
    )
}