import React from 'react';
import s from './Card.module.scss';
import { Tooltip } from 'antd';
import CardButtons from './Buttons';

const Card = ({ data }) => {
  return (
    <>
      <div className={s.card}>
        <div className={s.card_top}>
          <h3>
            ID: {data.id}
            <Tooltip placement='topLeft' title={'Something...'}>
              <img src='/alert-icon.svg' alt='alert' />
            </Tooltip>
          </h3>

          <div>
            <p>{data.price.toLocaleString()} сум</p>
            {data.payment === 'Payme' ? (
              <img src='/payme-icon.svg' alt='payme' />
            ) : data.payment === 'Click' ? (
              <img src='/click-icon.svg' alt='click' />
            ) : data.payment === 'Cash' ? (
              <img src='/cash.svg' alt='click' />
            ) : data.payment === 'Prime' ? (
              <img src='/prime.svg' alt='click' />
            ) : data.payment === 'Card' ? (
              <img src='/credit-card.svg' alt='click' />
            ) : data.payment === 'foot' ? (
              <img src='/foot.svg' alt='click' />
            ) : null}

            {data.icon === 'kitchen' ? (
              <img src='/home-icon.svg' alt='home' />
            ) : data.icon === 'foot' ? (
              <img src='/foot.svg' alt='home' />
            ) : data.icon === 'car' ? (
              <img src='/car.svg' alt='home' />
            ) : null}
          </div>
        </div>
        <div className={s.card_content}>
          <div className={s.card_list}>
            {data.order.map((el, index) => (
              <div key={index} className={s.card_item}>
                <p>
                  <span>{el.count}</span> x {el.name}
                </p>
                <ul>
                  {el?.desc?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={s.card_timer}>
            <img src='/timer-icon.svg' alt='timer' />
            <p>{data.time}</p>
          </div>
        </div>
        <CardButtons status={data.status} />
      </div>
    </>
  );
};

export default Card;
