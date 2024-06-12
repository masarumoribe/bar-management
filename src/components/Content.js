import './Content.css'

function Content({inventoryData}) {
    console.log(inventoryData)
    return(
        <div className='main-content'>
            {inventoryData && inventoryData.length > 0 ? <h1>Inventory Items</h1>: <h1>No invetory items</h1>}
            <table className='invTable'>
                <thead className='invTableHead'>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Unit</th>
                        <th>Cost</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {inventoryData.map(invItem => {
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