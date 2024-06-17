import { Link, Outlet } from 'react-router-dom';
import './InventoryMenu.css'

function InventoryMenu() {
    // console.log(setInventoryData)
    return(
        <div>
            <nav className='inv-menu'>
                <ul className='inv-menu-items'>
                    <li className='inv-menu-item'>
                        <Link className='inv-menu-item-link' to="/inventory/add">Add item</Link>
                    </li>
                    <li className='inv-menu-item'>
                        <Link className='inv-menu-item-link' to="/inventory/edit">Edit item</Link>
                    </li>
                    <li className='inv-menu-item'>
                        <Link className='inv-menu-item-link' to="/inventory/delete">Delete item</Link>
                    </li>
                </ul>
                <Outlet/>
            </nav>
        </div>
    )
}

export default InventoryMenu