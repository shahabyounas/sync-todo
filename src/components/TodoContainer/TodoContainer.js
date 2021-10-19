import React from 'react';
import './todo-container.scss'


const TodoContainer = () => {

    return <div className="todo-container">
        <div className="todo-container__header">
            <div>  <strong> To do list </strong></div>
            <div className="text-uppercase"> <strong> All Item </strong> </div>
        </div>

        <div className="todo-container__list">
            List items
        </div>
    </div>
};

export default TodoContainer;