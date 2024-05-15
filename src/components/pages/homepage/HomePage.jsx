import React from 'react';
import './HomePage.css';
import icecream from './icecream.png';


const HomePage = () => {
    return (
        <div id='mainBody'>
            <h1>Laura Shour</h1>
            <div id='line'></div>
            <h2>Full-Stack Web Development</h2>
            <div id='imageDiv'>
        <div id='circle'></div>
        <img id = 'profile'src={icecream} alt = 'Profile'></img>
        <button type='button' src='#' id='homeBtn'>GET IN TOUCH</button>
        </div>
        <div id='brown'></div>
        <div id='pink'></div>
        <div id='green'></div>
        <div id='white'></div>
        </div>
    );
}

export default HomePage;