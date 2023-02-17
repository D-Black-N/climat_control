import '../../styles/header.css';
import {
  Tabs,
  TabList,
  Tab,
  Image,
  Box,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Avatar } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import Logout from '../../images/logout.png';

const Header = () => {
  const links = [
    { href: 'greenhouses', label: 'Теплицы' },
    { href: 'monitoring', label: 'Мониторинг' },
    { href: 'settings', label: 'Настройки' },
  ]

  const handleClickLogOut = (event) => {
    event.preventDefault();
    console.log(event.target)
  }

  return (
    <div className='header'>
      <Tabs align='center'  height={'70px'} maxWidth={'1200px'} minWidth={'850px'} margin='auto'>
        <TabList height={'70px'} borderBottom={'1px solid #37b940'}>
          <Box height={'70px'}>
            <Link to='/'><Image src={Logo} height='70px' margin={'0 15px'} /></Link>
          </Box>
          {links.map((link, index) =>
            <Tab _selected={{ color: '#151588', borderBottom: '3px solid #151588' }} fontSize='16pt' padding='0' borderBottom={'3px solid #37b940'} margin={'0 15px'}>
              <Link to={link.href} className='header-link'>{link.label}</Link>
            </Tab>          
          )}
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon height={'25px'} width={'25px'} />}
              leftIcon={<Avatar />}
              marginLeft={'auto'}
              width={'200px'}
              height={'70px'}
              fontSize={'14pt'}
              fontWeight={'bold'}
              marginRight={'10px'}
              borderRight={'2px solid #165c99'}
              borderLeft={'2px solid #165c99'}
              borderRadius={'none'}
              backgroundColor={'inherit'}
              _active={{ backgroundColor: 'inherit' }}
              _hover={{ backgroundColor: 'inherit' }}
            >
              User
            </MenuButton>
            <MenuList
              minWidth={'200px'}
              borderTopRadius={'0'}
              border={'2px solid #165c99'}
              borderTop={'1px solid #165c99'}
              backgroundColor={'#37b940'}
              marginTop={'-9px'}
            >
              <MenuItem
                onClick={handleClickLogOut}
                icon={<Image src={Logout} />}
                backgroundColor={'inherit'}
                _hover={{ backgroundColor: '#278f2e' }}
              >
                Выход
              </MenuItem>
            </MenuList>
          </Menu>
        </TabList>
      </Tabs>
    </div>
  )
}

export default Header;