import React, { useContext } from 'react';
import TodoContext from '../../context/todo-context';
import './todo-container.scss'


const TodoContainer = () => {

    const { items, deleteItem } = useContext(TodoContext);

    return <div className="todo-container">
        <div className="todo-container__header">
            <div>  <strong> To do list </strong></div>
            <div className="text-uppercase"> <strong> All Item </strong> </div>
        </div>

        <div className="todo-container__list">
            {items.map((item) => {
                return (
                    <div className="todo-container__item">
                        <div className="center-element">
                            <div className="todo-container__checkbox"> <input type="checkbox" /> </div>
                            <div className="todo-container__title">{item.title?.length > 25 ? `${item.title?.slice(0, 25)} ...` : item.title} </div>
                        </div>
                        <div>
                            <small 
                                className="todo-container__delete" 
                                onClick={() => deleteItem(item.id)}
                                tabIndex="0"
                                role="button"> 
                                Delete
                            </small>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
};

export default TodoContainer;