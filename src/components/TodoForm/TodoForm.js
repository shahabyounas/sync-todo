import React, { useContext, useState } from 'react';
import { nanoid } from 'nanoid'
import TodoContext from '../../context/todo-context'
import { TODO_ITEM_STATUSES } from '../../constants';
import { Plus } from '../../components/Svgs';
import './todo-form.scss'

const TodoForm = () => {

    const [itemText, setItemText ] = useState('');
    const { items, setItems } = useContext(TodoContext);


    const inputTexHandler = (e) => {
        setItemText(e.target.value);
    }

    const addItemHandler = () => {
        const item = {
            id: nanoid(),
            title: itemText,
            status: TODO_ITEM_STATUSES.PENDING,
        }
        setItems([...items, ...[item] ]);
        setItemText('');
    }


    return (<div className="todo-form">

        <div>
            <div className="text-start bold todo-form__heading"> To do list</div>
            <small className="bold"> What needs to be done today? </small>
        </div>

        <div className="todo-form__input-container mt-5">
            <div> 
                <input 
                    type="text"  
                    value={itemText} 
                    onChange={(e) => inputTexHandler(e)} 
                    placeholder="Enter Item"
                    className="todo-form__input-text"
                />
            </div>

            <div>
                <button className={`bold center-element todo-form__add-btn ${!itemText.length && 'todo-form__add-btn--disabled'}`} 
                        disabled={!itemText.length}
                        onClick={() => addItemHandler()}>
                    <span> Add </span>
                    <Plus />
                </button>
            </div>
        </div>
    </div>)
}

export default TodoForm;