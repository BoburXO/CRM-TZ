import React, { useContext } from 'react';
import s from './filters.module.scss';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import CustomSelect from '../CustomSelect';
import { Context } from '../../context';

const Filters = () => {
  const { searchTerm, setSearchTerm, setTimeValue } = useContext(Context);

  dayjs.extend(customParseFormat);

  const onChange = (time, timeString) => {
    setTimeValue(timeString);
  };

  return (
    <div className={s.filter_wrapper}>
      <div className={s.filter_left}>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          type='text'
          placeholder='Поиск по ID'
        />
      </div>
      <div className={s.filter_right}>
        <CustomSelect />
        <TimePicker
          className={s.time_select}
          onChange={onChange}
          defaultOpenValue={dayjs('00:00', 'HH:mm')}
          showSecond={false}
          placeholder='00:00'
        />
      </div>
    </div>
  );
};

export default Filters;
