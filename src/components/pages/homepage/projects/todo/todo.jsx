import React, { useState } from "react";
import './todo.css';

const TodoList = () => {
    const [heading, setHeading] = useState("Todo List");

    return (
        <div>
            <div id='row'>
            <input placeholder='What will you do today?' />
            <button id='task'>Add Task</button>
            </div>
            <div class='listItems'>
                <ul class='todo-list'>
                    <li><div class='uncheck'></div>Item 1</li>
                    <li><div class='uncheck'></div>Item 2</li>
                </ul>
            </div>
        </div>
    )
};

export default TodoList;
