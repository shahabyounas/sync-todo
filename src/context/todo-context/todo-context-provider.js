import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoContext from './todo-context';


function TodoProvider({ children }) {

    const [items, setItems ] = useState([]);

    const deleteItem = (id) => {
      setItems(items.filter(item => item.id !== id));
    }

  return (
    <TodoContext.Provider value={{ items, setItems, deleteItem }}>
      {children}
    </TodoContext.Provider>
  );
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoProvider;
