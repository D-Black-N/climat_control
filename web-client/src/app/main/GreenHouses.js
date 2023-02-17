// import React from 'react';
import { Heading, Box, Stack } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import { Spinner } from '@chakra-ui/spinner';
import { useState, useEffect } from 'react';
import GreenHouseModal from './GreenHouseModal';
import GreenHouseItem from './GreenHouseItem';
import { Table, Thead, Tr, Th, Tbody } from '@chakra-ui/table';

const GreenHouses = () => {
  const [data, setData] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setData([
      { id: 1, name: 'Тестовая теплица', state: 'ready', ip_address: '192.168.0.12' },
      { id: 2, name: 'Тестовая теплица', state: 'ready', ip_address: '192.168.0.13' }
    ])
    setIsLoaded(true)
    // Здесь нужно отправлять запрос на получение списка теплиц
  }, [])
  

  return (
    <div className='greenhouses-page'>
      <Box display={'flex'}>
        <Heading color={'#989e9f'} size={'lg'} alignSelf={'center'} marginRight={'15px'}>Количество теплиц</Heading>
        {isLoaded ? <Heading size={'xl'}>{data.length}</Heading> : <Spinner speed={'0.6s'} />}
        <GreenHouseModal action={'new'} count={1} />
      </Box>
      <Stack mt={10} spacing={4}>
        <Skeleton height={'40px'} isLoaded={isLoaded}>
          <Table>
            <Thead>
              <Tr>
                <Th>№ Теплицы</Th>
                <Th>Наименование</Th>
                <Th>Состояние</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((elem, ind) =>
                <GreenHouseItem key={ind} data={elem} />
              )}
            </Tbody>
          </Table>
        </Skeleton>
      </Stack>
    </div>
  )
}

export default GreenHouses;
