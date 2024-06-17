// import { useLocation } from 'react-router-dom';
import './AddNewItem.css'
import { useState } from 'react';

function AddNewItem({setInventoryData}) {

    const [formData, setFormData] = useState({
        name: '',
        category: '',
        unit: '',
        cost: '',
        quantity: ''
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        category: '',
        unit: '',
        cost: '',
        quantity: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        if (form.checkValidity() === false) {
            e.stopPropagation();
            validate();
        } else {
            const newItem = {
            ...formData,
            id: Date.now().toString()
        }
        setInventoryData((currentInventoryData) =>{
            return [
                ...currentInventoryData,
                newItem
            ]
        })
        setFormData({
            name: '',
            category: '',
            unit: '',
            cost: '',
            quantity: ''
        })
        setFormErrors({
            name: '',
            category: '',
            unit: '',
            cost: '',
            quantity: ''
        })
        console.log(formData)
        }
    }

    const validate = () => {
        let errors = {};

        if (!formData.name) {
            errors.name = 'Name is required';
        }

        if(!formData.category) {
            errors.category = 'Category is required'
        }

        if(!formData.unit) {
            errors.unit = 'Unit is required'
        }

        if(!formData.cost) {
            errors.cost = 'Cost is required'
        } else if(!/^\d+$/.test(formData.cost)) {
            errors.cost = 'Cost must be a number'
        }

        if(!formData.quantity) {
            errors.quantity = 'Quantity is required'
        } else if(!/^\d+$/.test(formData.quantity)) {
            errors.quantity = 'Quantity must be a number'
        }

        setFormErrors(errors);
    }

    return(
        <div className='add-item-page'>
            <h1>Add New Inventory Item</h1>
            <form className='add-item-form' onSubmit={handleSubmit} noValidate>
                <label htmlFor='name'>Name:
                    <input type='text'
                    placeholder='Item name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    />
                    {formErrors.name && <span className='error'>{formErrors.name}</span>}
                </label>
                <label htmlFor='category'>Category:
                    <select name='category' value={formData.category} onChange={handleChange} required>
                        <option value="">Select Category</option>
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
                    {formErrors.category && <span className='error'>{formErrors.category}</span>}
                </label>
                <label htmlFor='unit'>Unit:
                    <select name='unit' value={formData.unit} onChange={handleChange} required>
                        <option value="">Select Unit:</option>
                        <option value="bottle">Bottle</option>
                        <option value="can">Can</option>
                        <option value="keg">Keg</option>
                        <option value="case">Case</option>
                        <option value="kg">Kilograms</option>
                    </select>
                    {formErrors.unit && <span className='error'>{formErrors.unit}</span>}
                </label>
                <label htmlFor='cost'>Cost:
                    <input id="cost" type='number' name='cost' value={formData.cost} onChange={handleChange} required/>
                    {formErrors.cost && <span className='error'>{formErrors.cost}</span>}
                </label>
                <label htmlFor='qty'>Quantity:
                    <input type='number' name='quantity' value={formData.quantity} onChange={handleChange} required/>
                    {formErrors.quantity && <span className='error'>{formErrors.quantity}</span>}
                </label>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddNewItem;