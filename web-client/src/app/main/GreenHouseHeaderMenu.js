import { Box } from "@chakra-ui/layout";
import { Tab, TabList } from "@chakra-ui/tabs";
import { Link } from "react-router-dom";

const GreenHouseHeaderMenu = () => {
  const pages = [
    { name: 'Основная информация', link: '' },
    { name: 'Мониторинг', link: 'monitoring' },
    { name: 'Настройки', link: 'settings' }
  ]

  return (
    <TabList height={'70px'} borderBottom={'none'}>
      {pages.map((page, ind) =>
        <Tab _selected={{ color: '#151588', borderBottom: '3px solid #151588' }} fontSize='16pt' padding='0'  margin={'0 15px'} key={ind}>
          <Link to={page.link} className='header-link'>{page.name}</Link>
        </Tab>        
      )}
    </TabList>
  )
}

export default GreenHouseHeaderMenu;