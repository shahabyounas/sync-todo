import React, { useContext, useState } from 'react';
import { TODO_ITEM_STATUSES } from '../../constants';
import TodoContext from '../../context/todo-context';
import { Sync } from '../Svgs';
import DropDown from '../Dropdown';
import Popup from '../popup/popup';
import './todo-container.scss'


const TodoContainer = () => {

    const { items, deleteItem, updateItem, filter, setFilter, resetList } = useContext(TodoContext);
    const [isOpen, setIsOpen] = useState(true);

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


    const resetListHandler = () => {
        resetList();
        setIsOpen(o => !o);
    }
 

    return <div className="todo-container">
        <div className="todo-container__header">
            <div className="center-element"> 
                <strong className="fz24"> To do list </strong> 
                <span className="mx-2 cursor-pointer" onClick={() => setIsOpen(o => !o)} role="button" tabIndex="0"> <Sync /> </span> 
            </div>
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
                                {item.title?.length > 40 ? `${item.title?.slice(0, 40)} ...` : item.title}
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

        {isOpen && <Popup isOpen={isOpen}>
            <div className="flex-column">

                <strong className="text-start bold">Start a New List </strong>
                <p className="bold text-start fz14"> When you start a new list, your existing list will be deleted.
                    Would you like to start a new list? </p>
                
                <div className="mt-2 text-start">
                    <button className="todo-container__popup__button"  onClick={() => resetListHandler()}> Start New List </button>
                    <button 
                        className="todo-container__popup__button todo-container__popup__button--close" 
                        onClick={() => setIsOpen(o => !o)}>
                         Keep existing 
                    </button>
                </div>
            </div>
        </Popup> }
    </div>
};

export default TodoContainer;