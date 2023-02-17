import { useEffect, useState } from 'react';
import GreenHouseHeader from './GreenHouseHeader';
import GreenHouseHeaderMenu from './GreenHouseHeaderMenu';
import { TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import GreenHouseIndex from './GreenHouseIndex';
import GreenHouseMonitoring from './GreenHouseMonitoring';
import GreenHouseSettings from './GreenHouseSettings';

const GreenHouse = () => {
  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const pageElements = [<GreenHouseIndex />, <GreenHouseMonitoring />, <GreenHouseSettings />]

  useEffect(() => {
    setData({
      id: 1,
      name: 'Тестовая теплица',
      state: 'power_off',

    })
    setIsLoaded(true);
  }, [])

  

  return (
    <div className='grennhouse-page-main'>
      <GreenHouseHeader data={data} />
      <Tabs isFitted align='center' height={'70px'} maxWidth={'1200px'} minWidth={'850px'} margin='auto' backgroundColor={'#e1f0fd'}>
        <GreenHouseHeaderMenu />
        <TabPanels>
          {pageElements.map((elem, ind) =>
            <TabPanel width={'100%'} bg={'#e1f0fd'} mt={5} key={ind}>
              {elem}
            </TabPanel>
          )}
        </TabPanels>
      </Tabs>

    </div>
  )
}

export default GreenHouse;