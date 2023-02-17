import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { RangeDatepicker } from 'chakra-dayzed-datepicker';
import { useState } from 'react';

const DateSelectorForm = () => {
  const [selectedDates, setSelectedDates] = useState([new Date(), new Date()]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const date_values = event.target.datepicker.value.split(' - ');
    const request_body = {
      from: date_values[0],
      to: date_values[1],
    }
    // Запрос
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <FormControl width={'50%'}>
        <FormLabel pl={5}>Выбор даты</FormLabel>
        <RangeDatepicker 
          selectedDates={selectedDates}
          onDateChange={setSelectedDates}
          name={'datepicker'}
        />
        <Input
          as={Button}
          type={'submit'}
          mt={5}
          bg={'#37b940'}
          value={'Составить'}
          _hover={{ cursor: 'pointer', backgroundColor: '#278f2e' }}
        >
          Составить график
        </Input>    
      </FormControl>
    </form>
  )
}

export default DateSelectorForm;
