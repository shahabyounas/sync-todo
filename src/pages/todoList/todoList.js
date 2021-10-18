import React from 'react';
import packagingImg from '../../assets/images/packaging.png'
import { XLogo } from '../../components/Svgs';
import TodoForm from '../../components/TodoForm/TodoForm';
import './todoList.scss'


const TodoList = () => {
    return (<div className="todoList">
        <div className="todoList-container">
            <div className="todoList__form-container">

                <div className="todo__logo">
                    <div className="todoList__logo"> Sync. </div>
                </div>

                <div className="todoList__form">
                    <TodoForm />
                </div>

            </div>


            <div className="todoList__image-container">
                <div>
                    <img src={packagingImg}
                        alt="todo packing"
                        height="500"
                        className="todoList__image"
                    />
                </div>

                <div className="todoList__x-logo"> 
                    <XLogo />
                </div>
            </div>

        </div>
    </div>)
}

export default TodoList;