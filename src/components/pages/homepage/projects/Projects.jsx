import React, {useState} from 'react';
import clock from '../../../assets/clock.png'; 
import calculator from '../../../assets/calculator.png';
import todo from '../../../assets/todo.png';
import weather from '../../../assets/weather.png'; // Correct relative path
import './Projects.css';
import WeatherComponent from "./WeatherComponent";

const Projects = () => {
    const [isWeatherModalOpen, setIsWeatherModalOpen]=useState(false);
   
    const openWeatherModal = () => {
        setIsWeatherModalOpen(true);
    };
    const closeWeatherModal = () => {
        setIsWeatherModalOpen(false);
    };

    return (
        <div className="total">
            <div id='projectHolder'>
                <div className='border'><img className='wigits' src={clock} alt="Clock" /></div>
                <div className='border'><img className='wigits' src={calculator} alt="Calculator" /></div>
                <div className='border'><img className='wigits' src={todo} alt="To-Do" /></div>
                <div className='border'><button id='weatherBtn' onClick={openWeatherModal}><img className='wigits' src={weather} alt="Weather" /></button></div>
                
            {isWeatherModalOpen && (
                <div id='weatherModal' class = 'modal'>
                    <div class='weatherContent'>
                        <div id='banner'></div>
                        <img className='weatherWig' src={weather} alt="Weather" />
                        <span class='close' onClick={closeWeatherModal}>&times;</span>
                        <WeatherComponent cityName="London" />
                    </div>
                </div>
            )}
                
                


            </div>
        </div>
    );

}

export default Projects;
