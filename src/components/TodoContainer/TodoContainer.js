import React, { useContext } from 'react';
import { TODO_ITEM_STATUSES } from '../../constants';
import TodoContext from '../../context/todo-context';
import './todo-container.scss'


const TodoContainer = () => {

    const { items, deleteItem, updateItem } = useContext(TodoContext);

    return <div className="todo-container">
        <div className="todo-container__header">
            <div>  <strong> To do list </strong></div>
            <div className="text-uppercase"> <strong> All Item </strong> </div>
        </div>

        <div className="todo-container__list">
            {items.map((item) => {
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