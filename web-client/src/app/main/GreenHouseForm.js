import React from 'react';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { ModalBody, ModalFooter } from '@chakra-ui/modal';

const GreenHouseForm = ({ action, onClose, converButton }) => {
  const handleRequest = (event) => {
    event.preventDefault();
    console.log(event.target);
  }

  return (
    <form className='greenhouse-form' onSubmit={handleRequest}>
      <FormControl onSubmit={handleRequest}>
        <ModalBody>
          <FormLabel ml={3}>Название</FormLabel>
          <Input type={'text'} />
        </ModalBody>
        <ModalFooter>
          <Button type={'submit'} backgroundColor={'#37b940'} color={'white'}>{converButton()}</Button>
          <Button onClick={onClose} ml={3} colorScheme={'red'}>Отменить</Button>
        </ModalFooter>
      </FormControl>
    </form>
  )
}

export default GreenHouseForm;