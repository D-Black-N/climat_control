import { SettingsIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import { useForm } from 'react-hook-form';
import { useRef, useEffect, useState } from "react";

const SettingsForm = ({ defaultValue, min, max }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const inputRef = useRef(defaultValue);

  const validate = (value) => {
    return Number(value) && (value >= min) && (value <= max)
  }

  const onSubmit = () => {
    const value = inputRef.current.firstChild.value;
    if (!validate(value)) {
      alert(`Ошибка!!!\n Введено некорректное значение`)
    }
    if (!(value === defaultValue)) {
      
    }
  }

  const handleDisableElement = () => {
    setActive(!active)
    inputRef.current.firstChild.value = defaultValue;
  }

  const [active, setActive] = useState(false)

  return (
    <InputGroup ref={inputRef}>
      <Input
        variant={'flushed'}
        pl={5}
        disabled={active ? null : 'disabled'}
        _disabled={{ cursor: 'default' }}
        defaultValue={defaultValue}
        type={'number'}
        {...register('name')}
      />
      <InputRightElement
        children={<SettingsIcon color={'grey'} _hover={{ cursor: 'pointer', color: 'black' }} />}
        onClick={event => {setActive(!active)}}
        style={Object.assign({}, active && { display: 'none' })}
        />
      <InputRightElement
        children={<CheckIcon color={'green'} _hover={{ cursor: 'pointer', color: 'black' }} />}
        style={Object.assign({}, !active && { display: 'none' })}
        mr={7}
        onClick={onSubmit}
      />
      <InputRightElement
        children={<CloseIcon color={'red'} _hover={{ cursor: 'pointer', color: 'black' }} />}
        style={Object.assign({}, !active && { display: 'none' })}
        onClick={handleDisableElement}
      />
    </InputGroup>
  )
}

export default SettingsForm;