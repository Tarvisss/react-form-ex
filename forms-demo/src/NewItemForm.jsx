import React, { useState } from "react";

const NewItemForm = ({ addItem }) => {
    const INTITIAL_STATE = {
        name: "",
        qty: ""
    }
    const [formData, setFormData] = useState(INTITIAL_STATE);
    //these two handleChange funtions are the same, but the top one uses destucturing
    // const handleChange = (event) => {
        // const { name, value } = event.target;
        // setFormData(formData => ({
        //     ...formData,
        //     [name]: value
        
        const handleChange = (event) => {
            setFormData(formData => ({
                ...formData,
    //When you write [name], you are using computed property names to dynamically create the key in the object.

                [event.target.name]: event.target.value
            }))
        }
        const handleSubmit = (event) => {
            event.preventDefault();
            // addItem(formData.name, formData.value);
            addItem({...formData});
            setFormData(INTITIAL_STATE);
        }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Product</label>
            <input
            id="name" 
            type="text"
            name="name"
            value={formData.name}
            placeholder="Item name"
            onChange={handleChange}
            />
            <label htmlFor="qty">Quanitity: {formData.qty}</label>
            <input
            id="qty" 
            type="range"
            min="1"
            max="15"
            name="qty"
            value={formData.qty}
            onChange={handleChange}
            />
            <button>Add Item</button>
        </form>

    )
}

export default NewItemForm;