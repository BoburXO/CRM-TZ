import React from 'react';
import s from '../globals.module.scss';

import Card from '../Card/Card';

const InReview = ({ data }) => {
  return (
    <div className={s.wrap}>
      <div className={`${s.top} ${s['in-review']}`}>
        <h2>Курьер в пути ({data?.length})</h2>
      </div>
      <div className={s.list}>
        {data.map((el) => (
          <Card key={el.id} data={el} />
        ))}
      </div>
    </div>
  );
};

export default InReview;
