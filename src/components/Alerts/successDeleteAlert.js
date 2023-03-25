import React from "react";
import {VStack,  Alert, AlertIcon,
  } from '@chakra-ui/react'

export const SuccessDeleteAlert = () => {
    console.log("alert")
    return (
    <VStack display="flex" justifyContent="center"   alignItems='center'>
        <Alert status='success' color="black" textAlign="center">
        <AlertIcon />
            Contact deleted!
        </Alert>
    </VStack> 
    )
  }

