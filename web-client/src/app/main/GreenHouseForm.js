import React, { useEffect } from 'react';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { ModalBody, ModalFooter } from '@chakra-ui/modal';
import { createGreenHouse } from '../../api/api';
import { validateGreenHouse } from '../../helpers/Validations';
import { Cookies } from 'react-cookie';

const GreenHouseForm = ({ action, onClose, converButton }) => {
  const cookie = new Cookies();

  const handleRequest = (event) => {
    event.preventDefault();
    const target = event.target;
    const body = {
      greenhouse: {
        name: event.target.name.value,
        ip_address: event.target.ip_address.value,
        location: event.target.location.value,
      }
    } 
    if (validateGreenHouse(target, body.greenhouse)) {
      const headers = {
        'X-CSRF-Token': cookie.get('CSRF-TOKEN')
      }
      createGreenHouse(body, headers)
        .then(response => {
          if (response.status === 201) {
            onClose
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
    else {
      setTimeout(() => {
        target.name.style.border = '1px solid #e2e8f0'
        target.ip_address.style.border = '1px solid #e2e8f0'
        target.location.style.border = '1px solid #e2e8f0'
      }, 3000)
    }
  }

  return (
    <form className='greenhouse-form' onSubmit={handleRequest}>
      <FormControl onSubmit={handleRequest}>
        <ModalBody>
          <FormLabel ml={3}>Название</FormLabel>
          <Input type={'text'} name='name' />
          <FormLabel ml={3} mt={2}>IP-адрес</FormLabel>
          <Input type={'text'} name='ip_address' />
          <FormLabel ml={3} mt={2}>Местонахождение</FormLabel>
          <Input type={'text'} name='location' />
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