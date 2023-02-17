import { Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import SettingsTable from '../../helpers/SettingsTable';

const GreenHouseSettings = () => {
  const values = [
    { name: 'airTemp', label: 'Температура воздуха', min_val: 20, max_val: 30, min: 0, max: 60 },
    { name: 'grTemp', label: 'Температура почвы', min_val: 20, max_val: 30, min: 0, max: 60 },
    { name: 'airHum', label: 'Влажность воздуха', min_val: 20, max_val: 30, min: 0, max: 100 },
    { name: 'grHum', label: 'Влажность почвы', min_val: 20, max_val: 30, min: 0, max: 100 },
    { name: 'illum', label: 'Время освещенности', min_val: 20, min: 0, max: 24 },
  ]

  // const values = [
  //   { 
  //     airTemp: {
  //       min: {},
  //       max: {}
  //     },
  //   },
  //   {}
  // ]

  const initialValues = [
    'airTemp',
    'grTemp',
    'airHum',
    'grHum',
    'illum'
  ].reduce((accum, element) => {
    const param = values.find(elem => elem.name === element)
    return {
      ...accum,
      [element + 'Min']: param.min_val,
      [element + 'Max']: param.max_val,
    }
  }, {})

  return (
    <Table>
      <Thead alignItems={'center'}>
        <Tr>
          <Th>Параметр</Th>
          <Th>Минимальное значение</Th>
          <Th>Максимальное значение</Th>
        </Tr>
      </Thead>
      <Tbody>
        {values.map((val, ind) =>
          <SettingsTable data={val} key={ind} />
        )}
      </Tbody>
    </Table>
  )
}

export default GreenHouseSettings;