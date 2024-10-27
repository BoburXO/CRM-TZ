import React, { useContext } from 'react';
import Select from 'react-select';
import { FaClipboardList } from 'react-icons/fa';
import { Context } from '../context';
import { orders } from '../db/data';

const customStyles = {
  control: (provided) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    padding: '4px 8px',
    border: '1px solid #e0e0e0',
    boxShadow: 'none',
    minWidth: '180px',
  }),
  placeholder: (provided) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    color: '#000',
    fontSize: '14px',
    gap: '6px',
  }),
  singleValue: (provided) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#007bff',
    padding: '0 4px',
  }),
  indicatorSeparator: () => null,
};

const Placeholder = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
    <FaClipboardList color='#007bff' size={14} />
    <span>Всего: {orders?.length}</span>
  </div>
);

const CustomSelect = () => {
  const { setSelectValue } = useContext(Context);

  const options = [
    {
      value: 'all',
      label: (
        <>
          <FaClipboardList color='#007bff' size={16} />
          Всего
        </>
      ),
    },
    {
      value: 'New',
      label: (
        <>
          <FaClipboardList color='#007bff' size={16} />
          Новый
        </>
      ),
    },
    {
      value: 'In-Progress',
      label: (
        <>
          <FaClipboardList color='#007bff' size={16} />
          Заготовка
        </>
      ),
    },
    {
      value: 'Completed',
      label: (
        <>
          <FaClipboardList color='#007bff' size={16} />
          Готов
        </>
      ),
    },
    {
      value: 'In Review',
      label: (
        <>
          <FaClipboardList color='#007bff' size={16} />
          Курьер в пути
        </>
      ),
    },
  ];
  return (
    <Select
      options={options}
      styles={customStyles}
      placeholder={<Placeholder />}
      onChange={(newValue) =>
        setSelectValue({ value: newValue.value, label: newValue.label })
      }
    />
  );
};

export default CustomSelect;
