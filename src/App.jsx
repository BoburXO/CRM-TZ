import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Page404 from './pages/Page404/Page404';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
