import React, { useContext, useState } from 'react';
import { TODO_ITEM_STATUSES } from '../../constants';
import TodoContext from '../../context/todo-context';
import DropDown from '../Dropdown';
import './todo-container.scss'


const TodoContainer = () => {

    const { items, deleteItem, updateItem, filter, setFilter } = useContext(TodoContext);

    const menus = [
        {
            id:"1", 
            label: 'ALL',
            filter: TODO_ITEM_STATUSES.ALL,
        },
        {
            id:"2", 
            label: 'NOT COMPLETED',
            filter: TODO_ITEM_STATUSES.PENDING,
        },
        {
            id:"3", 
            label: 'COMPLETED',
            filter: TODO_ITEM_STATUSES.COMPLETED,
        }
    ]
 

    return <div className="todo-container">
        <div className="todo-container__header">
            <div>  <strong> To do list </strong></div>
            <div>  <DropDown items={menus} itemSelectHandler={(id) => setFilter(menus.find(m => m.id === id).filter)}  />  </div>
        </div>

        <div className="todo-container__list">
            {( filter === TODO_ITEM_STATUSES.ALL ? items : items.filter(t => t.status === filter)).map((item) => {
                const isCompleted = item.status === TODO_ITEM_STATUSES.COMPLETED;
                return (
                    <div className="todo-container__item">
                        <div className="center-element">
                            <div className="todo-container__checkbox">
                                <input
                                    type="checkbox"
                                    checked={isCompleted}
                                    onChange={() => updateItem(item.id)}
                                    disabled={isCompleted}
                                />
                            </div>
                            <div className={`todo-container__title ${isCompleted && 'todo-container__title--completed'}`}>
                                {item.title?.length > 25 ? `${item.title?.slice(0, 25)} ...` : item.title}
                            </div>
                        </div>
                        <div>
                            <button
                                className="todo-container__delete"
                                onClick={() => deleteItem(item.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
};

export default TodoContainer;