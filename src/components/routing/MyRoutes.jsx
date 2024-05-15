import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import HomePage from '../pages/homepage/HomePage';
import NavBar from './NavBar';
import Projects from '../pages/homepage/projects/Projects';


const MyRoutes = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
            <Route path='/' element = {<HomePage/>}/>
            <Route path='/Projects' element = {<Projects/>}/>
            </Routes>
        </Router>
    );
}

export default MyRoutes;