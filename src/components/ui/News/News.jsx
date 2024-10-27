import React from 'react';
import s from '../globals.module.scss';
import Card from '../Card/Card';

const News = ({ news }) => {
  return (
    <>
      <div className={s.wrap}>
        <div className={s.top}>
          <h2>Новый ({news?.length})</h2>
        </div>
        <div className={s.list}>
          {news.map((el) => (
            <Card key={el.id} data={el} />
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
