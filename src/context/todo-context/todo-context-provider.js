import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoContext from './todo-context';


function TodoProvider({ children }) {

    const [items, setItems ] = useState([1,2,4]);

  return (
    <TodoContext.Provider value={{ items, setItems }}>
      {children}
    </TodoContext.Provider>
  );
}

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoProvider;
