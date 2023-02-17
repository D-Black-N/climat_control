import React from 'react';
import { Box, Text } from '@chakra-ui/layout';
import { useNavigate } from 'react-router';
import { Td, Tr } from '@chakra-ui/table';
import { CheckIcon, NotAllowedIcon } from '@chakra-ui/icons';

const GreenHouseItem = ({ data }) => {
  const navigate = useNavigate();

  const handleClickGreenHouse = () => {
    navigate(`${data.id}`)
  }

  const convertState = () => {
    switch (data.state) {
      case 'ready':
        return 'Работает'
      case 'error':
        return 'Ошибка'
      default:
        break;
    }
  }

  const selectStateIcon = () => {
    switch (data.state) {
      case 'ready':
        return <CheckIcon mr={5} />
      case 'error':
        return <NotAllowedIcon mr={5} />
      default:
        break;
    }
  }

  return (
    <Tr
      bg={'#37b940'}
      mb={'10px'}
      borderBottom={'20px solid white'}
      onClick={handleClickGreenHouse}
      _hover={{ cursor: 'pointer' }}
    >
      <Td>
        <Text fontSize={'2xl'} alignSelf={'center'} ml={6}>{data.id}</Text>
      </Td>
      <Td>
        <Text fontSize={'2xl'} alignSelf={'center'}>{data.name}</Text>
      </Td>
      <Td>
        <Text fontSize={'2xl'} alignSelf={'center'}>
          {selectStateIcon()}
          {convertState()}
        </Text>
      </Td>
    </Tr>
  )
}

export default GreenHouseItem;