import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoContext from './todo-context';
import { TODO_ITEM_STATUSES } from '../../constants';


function TodoProvider({ children }) {

    const [items, setItems ] = useState([]);
    const [filter, setFilter] = useState(TODO_ITEM_STATUSES.ALL);

    const deleteItem = (id) => {
      setItems(items.filter(item => item.id !== id));
    }

    const updateItem = (id) => {
      setItems(items.map(item => {
        if(item.id === id) {
          item.status = TODO_ITEM_STATUSES.COMPLETED;
          return item
        }
        return item;
      }));
    }

  return (
    <TodoContext.Provider value={{ items, setItems, deleteItem, updateItem, filter, setFilter }}>
      {children}
    </TodoContext.Provider>
  );
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoProvider;
