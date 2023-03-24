import React from "react";
import { useNavigate } from 'react-router-dom'
import { signOut } from "redux/auth/auth.thunk";
import { useDispatch } from "react-redux";
import { Button, Flex } from '@chakra-ui/react'
import { BsPerson, BsBoxArrowInRight } from "react-icons/bs";

export const LoggedInBtns = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleSignOut = () => dispatch(signOut())

  return (
    <Flex gap="5px">
      <Button  colorScheme='purple' variant='solid'onClick={()=> navigate('/my-account')}>
        <BsPerson />
      </Button>
      <Button colorScheme='purple' variant='solid' onClick={handleSignOut}>
        <BsBoxArrowInRight />
      </Button>
    </Flex>     

  )
};
