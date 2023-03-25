import React from "react";
import {VStack,  Alert, AlertIcon,
  } from '@chakra-ui/react'

export const SuccessLoginAlert = () => {
    console.log("alert")
    return (
    <VStack display="flex" justifyContent="center"   alignItems='center'>
        <Alert status='success' color="black" textAlign="center">
        <AlertIcon />
            Logged In!
        </Alert>
    </VStack> 
    )
  }
