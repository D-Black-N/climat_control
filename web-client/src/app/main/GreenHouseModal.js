import React from 'react';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import GreenHouseForm from './GreenHouseForm';

const GreenHouseModal = ({ action, count, data = {} }) => {
  const converAction = () => {
    return action == 'new' ? 'Создание' : 'Обновление';
  }

  const converButton = () => {
    return action == 'new' ? 'Создать' : 'Обновить'
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className='greenhouse-modal'>
      {count > 0 && <Button
        backgroundColor={'#37b940'}
        fontWeight={'semibold'}
        _hover={{ cursor: 'pointer', backgroundColor: '#abf0af' }}
        onClick={onOpen}
      >
        {converButton()}
      </Button>}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{converAction()} теплицы</ModalHeader>
          <ModalCloseButton />
          <GreenHouseForm
            action={action}
            onClose={onClose}
            converButton={converButton}
            data={data}
          />
        </ModalContent>
      </Modal>
    </div>
  )
}

export default GreenHouseModal;