import './Navbar.css'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom';

function Navbar(){
    return <nav className="nav">
        <div className='title-logo-container'>
            <img src={logo} className="nav-logo" alt="logo" />
            <Link to="/" className="nav-title">Muromachi Bar & Lounge</Link>
        </div>
        <ul>
            <li>
                <Link to="/inventory">Inventory</Link>
            </li>
            <li>
                <Link to="/recipes">Recipes</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/signup">Sign up</Link>
            </li>
        </ul>
    </nav>
}

export default Navbar;