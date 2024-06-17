import './Inventory.css'
import Sidebar from './Sidebar';
import Content from './Content';
import InventoryMenu from './InventoryMenu';


function Inventory({inventoryData}) {

    return(
        <>
            <Sidebar />
            <InventoryMenu />
            <Content inventoryData={inventoryData}/>
        </>
    )
}

export default Inventory;