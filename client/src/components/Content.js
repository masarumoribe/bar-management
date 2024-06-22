import axios from 'axios'
import { useEffect, useState } from 'react';
import './Content.css'

function Content({inventoryData}) {

    const [inventoryItemsList, setInventoryItemsList] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/inventory").then((response) => {
            setInventoryItemsList(response.data)
        })
    })

    return(
        <div className='main-content'>
            {inventoryItemsList && inventoryItemsList.length > 0 ? <h1>Inventory Items</h1>: <h1>No invetory items</h1>}
            <table className='invTable'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Unit</th>
                        <th>Cost</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {inventoryItemsList.map(invItem => {
                return (
                    <tr key={invItem.id}>
                        <td>{invItem.name}</td>
                        <td>{invItem.category}</td>
                        <td>{invItem.unit}</td>
                        <td>{invItem.cost}</td>
                        <td>{invItem.quantity}</td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Content;