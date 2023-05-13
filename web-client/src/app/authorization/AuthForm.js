import { Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import { useCookies, Cookies } from 'react-cookie';
import { login } from '../../api/api';

const AuthForm = ({ setIsLogged }) => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const cookie = new Cookies();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    event.target.reset();
    const headers = {
      'X-CSRF-Token': cookie.get('CSRF-TOKEN')
    }
    login(data, headers)
      .then(response => {
        if (response.status === 201 && cookies._token) {
          setIsLogged(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <Heading fontSize={'20pt'} textAlign={'center'}>Авторизация</Heading>
      <FormControl mt={5}>
        <FormLabel pl={5}>Логин</FormLabel>
        <Input placeholder='Введите логин' name='login'></Input>
      </FormControl>
      <FormControl mt={5}>
        <FormLabel pl={5}>Пароль</FormLabel>
        <Input type={'password'} name='password'></Input>
      </FormControl>
      <Button
        type='submit'
        mt={5}
        float={'right'}
        px={10}
        bg={'#37b940'}
        _hover={{ cursor: 'pointer', backgroundColor: '#278f2e' }}
      >
        Войти
      </Button>
    </form>
  )
}

export default AuthForm;