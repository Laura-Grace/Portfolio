import React, { useState } from 'react';
import clock2 from '../../../assets/clock2.png';
import calculator from '../../../assets/calculator.png';
import todoImg from '../../../assets/todoImg.png';
import weather from '../../../assets/weather.png';
import './Projects.css';
import WeatherComponent from "./WeatherComponent";
import TodoList from './todo/todo.jsx';
import Calculator from './calculator/calculator.jsx';
import DigitalClock from './clock/clock.jsx';

const Projects = () => {
    const [isWeatherModalOpen, setIsWeatherModalOpen] = useState(false);
    const [isTodoOpen, setIsTodoOpen] = useState(false);
    const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
    const [isClockOpen, setIsClockOpen] = useState(false);

    const openWeatherModal = () => setIsWeatherModalOpen(true);
    const closeWeatherModal = () => setIsWeatherModalOpen(false);

    const openTodoModal = () => setIsTodoOpen(true);
    const closeTodoModal = () => setIsTodoOpen(false);

    const openCalculator = () => setIsCalculatorOpen(true);
    const closeCalculator = () => setIsCalculatorOpen(false);

    const openClock = () => setIsClockOpen(true);
    const closeClock = () => setIsClockOpen(false);

    return (
        <div className="total">
            <div id='projectHolder'>
                <div className='border'>
                    <button id='clockBtn' onClick={openClock}>
                    <img className='wigits' src={clock2} alt="Clock" />
                    </button>
                </div>
                <div className='border'>
                    <button id='calcBtn' onClick={openCalculator}>
                        <img className='wigits' src={calculator} alt="Calculator" />
                    </button>
                </div>
                <div className='border'>
                    <button id='todoBtn' onClick={openTodoModal}>
                        <img className='wigits' src={todoImg} alt="To-Do" />
                    </button>
                </div>
                <div className='border'>
                    <button id='weatherBtn' onClick={openWeatherModal}>
                        <img className='wigits' src={weather} alt="Weather" />
                    </button>
                </div>

                {isWeatherModalOpen && (
                    <div id='weatherModal' className='modal'>
                        <div className='weatherContent'>
                            <div id='banner'></div>
                            <img className='weatherWig' src={weather} alt="Weather" />
                            <span className='close' onClick={closeWeatherModal}>&times;</span>
                            <WeatherComponent cityName="London" />
                        </div>
                    </div>
                )}

                {isTodoOpen && (
                    <div id='todoModal' className='modal'>
                        <div className='todoContent'>
                            <span id='todoClose' onClick={closeTodoModal}>&times;</span>
                            <h1 id='toHead'></h1>
                            <TodoList />
                        </div>
                    </div>
                )}

                {isCalculatorOpen && (
                    <div id='calcModal' className='modal'>
                        <div className='calcContent'>
                            <span id='calcClose' onClick={closeCalculator}>&times;</span>
                            <h1 id='toHead'></h1>
                            <Calculator />
                        </div>
                    </div>
                )}

                {isClockOpen && (
                    <div id='clockModal' className='modal'>
                        <div className='clockContent'>
                            <span id='clockClose' onClick={closeClock}>&times;</span>
                            <h1 id='toHead'></h1>
                            <DigitalClock />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;
