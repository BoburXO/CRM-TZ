import React from 'react';
import Navbar from '../Navbar/Navbar';
import s from './main.module.scss';
import Filters from '../Filters/Filters';
import Orders from '../Orders/Orders';

const Main = () => {
  return (
    <>
      <Navbar />
      <div className={s.main}>
        <Filters />
        <Orders />
      </div>
    </>
  );
};

export default Main;
