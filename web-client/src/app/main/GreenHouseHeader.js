import { Button } from '@chakra-ui/button';
import { ArrowBackIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Heading, Text } from '@chakra-ui/layout';
import { Menu, MenuButton, MenuList } from '@chakra-ui/menu';
import { Spinner } from '@chakra-ui/spinner';
import { useNavigate } from 'react-router';
import CircleIcon from '../../helpers/CircleIcon';
import GreenHouseHeaderMenu from './GreenHouseHeaderMenu';

const GreenHouseHeader = ({ data }) => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate('/greenhouses');
  }

  const convertState = () => {
    switch (data.state) {
      case 'ready':
        return 'Работает';
      case 'error':
        return 'Ошибка';
      case 'updating':
        return 'Изменение параметров';
      case 'power_off':
        return 'Выключено';
    }
  }

  const activeStateActions = () => {

  }

  const setStateColor = () => {
    switch (data.state) {
      case 'ready':
        return '#37b940';
      case 'error':
        return 'red';
      case 'power_off':
        return 'grey'
    }
  }

  return (
    <div className='greenhouse-page-header'>
      <Box
        fontSize={'14pt'}
        display={'flex'}
        alignItems={'flex-start'}
        width={'max-content'}
        onClick={handleClickBack}
        _hover={{ cursor: 'pointer' }}
        color={'blue'}
      >
        <ArrowBackIcon boxSize={6} mr={1} />
        Назад
      </Box>
      <Box display={'flex'} justifyContent={'center'}>
        <Box width={'max-content'}>
          <Heading mt={1} fontSize={'20pt'}>{data.name}</Heading>
          <Text pl={6}>Теплица № {data.id}</Text>
        </Box>
        <Box ml={300} width={'max-content'} alignSelf={'center'} display={'flex'} alignItems={'flex-start'}>
          {data.state == 'updating' ? <Spinner mr={2} size={'sm'} mt={1} /> : <CircleIcon color={setStateColor()} mt={1} mr={2} />}
          <Text fontSize={'14pt'}>{convertState()}</Text>
        </Box>
      </Box>
    </div>
  )
}

export default GreenHouseHeader;