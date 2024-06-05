// import { useLocation } from 'react-router-dom';
import './AddNewItem.css'
import { useState } from 'react';

function AddNewItem({setInventoryData}) {

    const [formData, setFormData] = useState({
        name: '',
        category: 'Select Category',
        unit: 'Select Unit',
        cost: '',
        quantity: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInventoryData((currentInventoryData) =>{
            return [
                ...currentInventoryData,
                formData
            ]
        })
        setFormData({
            name: '',
            category: 'Select Category',
            unit: 'Select Unit',
            cost: '',
            quantity: ''
        })
    }

    // console.log(setInventoryData)

    return(
        <div className='add-item-page'>
            <h1>Add New Inventory Item</h1>
            <form className='add-item-form' onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:
                    <input type='text'
                    placeholder='Item name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    />
                </label>
                <label htmlFor='category'>Category:
                    <select name='category' value={formData.category} onChange={handleChange}>
                        <option disabled>Select Category</option>
                        <option value="non-alcohol">Non-alcohol</option>
                        <option value="whisky">Whisk(e)y</option>
                        <option value="brandy">Brandy & Cognac</option>
                        <option value="gin">Gin</option>
                        <option value="vodka">Vodka</option>
                        <option value="tequila">Tequila & Mezcal</option>
                        <option value="rum">Rum</option>
                        <option value="wine">Wine</option>
                        <option value="fortified">Fortified Wine</option>
                        <option value="liqueur">Liqueur</option>
                        <option value="sake">Sake, Shochu and Umeshu</option>
                        <option value="others">Others</option>
                    </select>
                </label>
                <label htmlFor='unit'>Unit:
                    <select name='unit' value={formData.unit} onChange={handleChange}>
                        <option disabled>Select Unit:</option>
                        <option value="bottle">Bottle</option>
                        <option value="can">Can</option>
                        <option value="keg">Keg</option>
                        <option value="case">Case</option>
                        <option value="kg">Kilograms</option>
                    </select>
                </label>
                <label htmlFor='cost'>Cost:
                    <input id="cost" type='number' name='cost' value={formData.cost} onChange={handleChange}/>
                </label>
                <label htmlFor='qty'>Quantity:
                    <input type='number' name='quantity' value={formData.quantity} onChange={handleChange}/>
                </label>
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddNewItem;