import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Filters from '../../components/Filters/Filters';
import Orders from '../../components/Orders/Orders';

const Home = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Filters />
      <Orders />
    </>
  );
};

export default Home;
