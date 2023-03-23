import React from "react";
import { Center, Button, Stack } from "@chakra-ui/react";

import {useNavigate} from 'react-router-dom';

export const Fail = () => {
    const navigate = useNavigate();
    return (
        <Center h="100vh">
            <Stack spacing={3} align="center">
                <img src={process.env.PUBLIC_URL + '/404pb-nobg.png'} alt="Nothing found" />
                <Button w={300} colorScheme="purple" variant="solid" onClick={() => navigate(-1)}>
                    Go back
                </Button>
            </Stack>
        </Center>
    )
}