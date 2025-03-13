import React, { useState } from "react";


const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        color: "",
        height: "",
        width: "",
        borderRadius: ""
    };

const [formData, setFormData] = useState(INITIAL_STATE);

const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
    addBox({...formData});
    setFormData(INITIAL_STATE);
}
    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="color">Color</label>
          <input
            id="color"
            type="text"
            name="color"
            value={formData.color}
            placeholder="Box Color"
            onChange={handleChange}
          />
          <label htmlFor="Height">Height</label>
          <input
            id="height"
            type="text"
            name="height"
            value={formData.height}
            placeholder="Box Height"
            onChange={handleChange}
          />
          <label htmlFor="width">Width</label>
          <input
            id="width"
            type="text"
            name="width"
            value={formData.width}
            placeholder="Box width"
            onChange={handleChange}
          />
          <input
            id="borderRadius"
            type="text"
            name="borderRadius"
            value={formData.borderRadius}
            placeholder="Border Radius"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      );
    };

export default NewBoxForm;