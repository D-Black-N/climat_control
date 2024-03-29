import React, { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import { getCSRFToken } from './api/api';
import Authorization from './app/authorization/Authorization';
import Header from './app/header/Header';
import Main from './app/main/Main';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const cookie = new Cookies();

  const checkLogin = () => {
    console.log(cookie.get('_token'))
    if (cookie.get('_token') !== 'undefined') {
      setIsLogged(true);
    }
  }

  const setCSRFToken = () => {
    getCSRFToken();
  }

  useEffect(() => {
    checkLogin();
    setCSRFToken();
  })

  return (
    <div>
      <BrowserRouter>
        {isLogged && (
          <>
            <Header setIsLogged={setIsLogged} />
            <Main />
          </>
        )}
        {!isLogged && <Authorization setIsLogged={setIsLogged} />}
      </BrowserRouter>
    </div>
  );
}

export default App;
