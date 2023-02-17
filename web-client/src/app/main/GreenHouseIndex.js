import { Heading, Icon, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tooltip, Tr } from '@chakra-ui/react';
import CircleIcon from '../../helpers/CircleIcon';

const GreenHouseIndex = ({ data }) => {
  const params = [
    { label: 'Температура воздуха', measure_type: '°C', value: 15.5, description: 'Текущая температура воздуха' },
    { label: 'Температура почвы', measure_type: '°C', value: 15.5, description: 'Текущая температура почвы' },
    { label: 'Влажность воздуха', measure_type: '%', value: 87, description: 'Текущая влажность воздуха' },
    { label: 'Влажность почвы', measure_type: '%', value: 95, description: 'Текущая влажность почвы' },
    { label: 'Время достаточной освещенности', measure_type: 'ч', value: '3:10', description: 'Период времени с достаточной овещенностью за сутки' },
    { label: 'Оставшийся объем воды', measure_type: 'л', value: 150, description: 'Объем воды в баке для полива' },
  ]

  const elements = [
    { label: 'Полив', state: 'enabled' },
    { label: 'Подогрев почвы', state: 'disabled' },
    { label: 'Обогрев воздуха', state: 'disabled' },
    { label: 'Форточки', state: 'opened' },
  ]

  const humanizeState = (state) => {
    switch (state) {
      case 'enabled':
        return 'Включено';
      case 'disabled':
        return 'Выключено';
      case 'opened':
        return 'Открыто';
      case 'closed':
        return 'Закрыто';
      default:
        break;
    }
  }

  const setIconColor = (state) => {
    if (state == 'enabled' || state == 'opened')
      return '#37b940';
    else
      return 'grey';
  }

  return (
    <TableContainer border={'1px solid'} borderRadius={'10px'}>
      <Heading size={'lg'} mt={5}>Параметры микроклимата в реальном времени</Heading>
      <Table size={'lg'}>
        <TableCaption>Данные в таблице обновляются каждые n минут</TableCaption>
        {params.map((option, ind) =>
          <Tr key={ind}>
            <Th>
              <Tooltip label={option.description}>
                <Icon mr={2} />
              </Tooltip>
              {option.label}
              </Th>
            <Td isNumeric>{option.value + option.measure_type}</Td>
          </Tr>
        )}
        {elements.map((option, ind) =>
          <Tr key={ind + params.length}>
            <Th pl={'55px'}>{option.label}</Th>
            <Td isNumeric><CircleIcon color={setIconColor(option.state)} mr={2} />{humanizeState(option.state)}</Td>
          </Tr>
        )}
      </Table>
    </TableContainer>
  )
}

export default GreenHouseIndex;