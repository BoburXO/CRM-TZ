import { createContext, useState } from 'react';
import { orders } from './db/data';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectValue, setSelectValue] = useState({
    value: null,
    label: null,
  });
  const [timeValue, setTimeValue] = useState('');

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
    setSelectValue({ value: null, label: null });
    setTimeValue('');
  };

  const handleSelectValueChange = (value) => {
    setSelectValue(value);
    setSearchTerm('');
    setTimeValue('');
  };

  const handleTimeValueChange = (value) => {
    setTimeValue(value);
    setSearchTerm('');
    setSelectValue({ value: null, label: null });
  };

  const getFilteredOrders = (status) => {
    return orders
      .filter((order) => order.status === status)
      .filter((order) => {
        if (selectValue.value) {
          if (selectValue.value === 'all') {
            return order;
          }
          return order.status === selectValue.value;
        } else if (timeValue) {
          return order.time === timeValue;
        } else {
          return order.id.toString().includes(searchTerm);
        }
      });
  };

  return (
    <Context.Provider
      value={{
        searchTerm,
        setSearchTerm: handleSearchTermChange,
        filteredNews: getFilteredOrders('New'),
        filteredInProgress: getFilteredOrders('In-Progress'),
        filteredCompleted: getFilteredOrders('Completed'),
        filteredInReview: getFilteredOrders('In Review'),
        selectValue,
        setSelectValue: handleSelectValueChange,
        timeValue,
        setTimeValue: handleTimeValueChange,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
