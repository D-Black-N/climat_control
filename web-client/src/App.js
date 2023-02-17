import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './app/header/Header';
import Main from './app/main/Main';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
