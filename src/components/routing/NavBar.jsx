import {Link} from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    return (
        <nav>
            <p>Laura Shour</p>
            <ul>
                <li><Link to='/'>HOME </Link></li>
                <li><Link to='/about'>ABOUT </Link></li>
                <li><Link to='/Projects'>PROJECTS </Link></li>
                <li><Link to='/Contact'>CONTACT ME</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar