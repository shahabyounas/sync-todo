import React, { useState } from 'react';
import { Plus } from '../../components/Svgs';
import './todoForm.scss'

const TodoForm = () => {

    const [itemText, setItemText ] = useState('');

    const inputTexHandler = (e) => {
        setItemText(e.target.value);
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
                        disabled={!itemText.length} >
                    <span> Add </span>
                    <Plus />
                </button>
            </div>
        </div>
    </div>)
}

export default TodoForm;