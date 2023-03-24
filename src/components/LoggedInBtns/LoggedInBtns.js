import React from "react";
import { useNavigate } from 'react-router-dom'
import { signOut } from "redux/auth/auth.thunk";
import { useDispatch } from "react-redux";
import { Button, Flex } from '@chakra-ui/react'

export const LoggedInBtns = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSignOut = () => dispatch(signOut())

  return (
    <Flex gap="30px">
      <Button  colorScheme='purple' variant='solid'onClick={()=> navigate('/my-account')}>My account</Button>
      <Button colorScheme='purple' variant='solid' onClick={handleSignOut}>Sign Out</Button>
    </Flex>     

  )
};
