import './Sidebar.css'
import { FaBars } from "react-icons/fa";

function Sidebar() {
    return(
        <nav className='sidebar-menu'>
            <FaBars className='hamburger-icon'/>
            <ul className='menu-items'>
                <li className='menu-item'>Whisk(e)y</li>
                <li className='menu-item'>Brandy & Cognac</li>
                <li className='menu-item'>Gin</li>
                <li className='menu-item'>Vodka</li>
                <li className='menu-item'>Rum</li>
                <li className='menu-item'>Tequila & Mezcal</li>
                <li className='menu-item'>Sake, Shochu & Umeshu</li>
                <li className='menu-item'>Liqueurs</li>
            </ul>
        </nav>
    )
}

export default Sidebar;