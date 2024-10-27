import React, { useContext } from 'react';
import s from './orders.module.scss';
import News from '../ui/News/News';
import InProgress from '../ui/InProgress/InProgress';
import Completed from '../ui/Completed/Completed';
import InReview from '../ui/InReview/InReview';
import { Context } from '../../context';

const Orders = () => {
  const {
    filteredNews,
    filteredInProgress,
    filteredCompleted,
    filteredInReview,
  } = useContext(Context);

  return (
    <>
      <div className={s.orders_wrapper}>
        <News news={filteredNews} />
        <InProgress data={filteredInProgress} />
        <Completed data={filteredCompleted} />
        <InReview data={filteredInReview} />
      </div>
    </>
  );
};

export default Orders;
