import { CheckIcon, CloseIcon, SettingsIcon } from '@chakra-ui/icons';
import { Box, FormControl, IconButton, Input, InputGroup, InputRightElement, Td, Text, Tr } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import SettingsForm from './SettingsForm';

const SettingsTable = ({ data }) => {
  return (
    <Tr>
      <Td fontSize={'14pt'}>{data.label}</Td>
      <Td><SettingsForm defaultValue={data.min_val} min={data.min} max={data.max} /></Td>
      {data.max_val && <Td><SettingsForm defaultValue={data.max_val} /></Td>}
    </Tr>
  )
}

export default SettingsTable;