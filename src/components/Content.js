import './Content.css'

function Content({inventoryData}) {
    console.log(inventoryData)
    return(
        <div className='main-content'>
            <h1>Inventory Items</h1>
            {inventoryData && inventoryData.length > 0 ? <h1>{inventoryData[0].name}</h1>: "Nothing"}
            <ul>
                {inventoryData.map(invItem => {
                return (
                    <li>{invItem.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Content;