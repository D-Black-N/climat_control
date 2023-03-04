import { Box } from '@chakra-ui/react';
import React from 'react';
import AuthForm from './AuthForm';

const Authorization = ({ setIsLogged }) => {
  return (
    <Box
      bg={'#e1f0fd'}
      width={'100%'}
      height={'100vh'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box
        height={'auto'}
        width={'500px'}
        bg={'white'}
        borderRadius={'10px'}
        boxShadow={'1px 5px 5px black'}
        display={'flex'}
        justifyContent={'center'}
      >
        <AuthForm setIsLogged={setIsLogged} />
      </Box>
    </Box>
  )
}

export default Authorization;