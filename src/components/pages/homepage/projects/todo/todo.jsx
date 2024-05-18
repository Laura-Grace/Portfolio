import React, { useState } from "react";
import './todo.css';
import todoImg from '../../../../assets/todoImg.png';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");

    const addTask = () => {
        if (taskInput.trim() !== "") {
            setTasks([...tasks, { text: taskInput, completed: false }]);
            setTaskInput("");
        }
    };

    const toggleTask = (index) => {
        const newTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(newTasks);
    };

    return (
        <div>
            <img id="towig" src={todoImg} alt="Todo"/>
            <div id='row'>
                <input
                    placeholder='What will you do today?'
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
                <button id='task' onClick={addTask}>Add Task</button>
            </div>
            <div className='listItems'>
                <ul className='todo-list'>
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            className={task.completed ? 'done' : ''}
                            onClick={() => toggleTask(index)}
                        >
                            <div className={task.completed ? 'check' : 'uncheck'}></div>
                            {task.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;

