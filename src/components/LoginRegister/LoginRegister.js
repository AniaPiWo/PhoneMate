import React from "react";
import {useNavigate } from 'react-router-dom'
import { Button, Stack } from '@chakra-ui/react'

export const LoginRegister = () => {
  const navigate = useNavigate()

  return (
    <Stack direction='column' spacing={4} align='center'>
              <Button w='300px' colorScheme='purple' variant='solid' onClick={()=> navigate('login')}>Sign In</Button>
              <Button w='300px' colorScheme='purple' variant='solid' onClick={()=> navigate('register')}>Register</Button>
    </Stack>
  )
};
