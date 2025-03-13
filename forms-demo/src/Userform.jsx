import React, {useState} from "react";

const Userform = () => {
    // const [username, setUsername] = useState("")
    // const [email, setEmail] = useState("")
    const INITIALSTATE = {
        username: "",
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(INITIALSTATE)

 const handleChange = (event) => {
    setFormData(data => ({
       ...data,
       [event.target.name]: event.target.value 
    }))
 }
    const handleSubmit = (event) => {
        event.preventDefault();
        const { username, email, password } = formData
        alert(`Created User, ${username} with email ${email} and password ${password} `)
        setFormData(INITIALSTATE);
    }
    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input 
        id="username" 
        type="text" 
        name="username"
        placeholder="username" 
        value={formData.username} 
        onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input 
        type="email" 
        name="email"
        placeholder="email" 
        id="email" 
        value={formData.email}
        onChange={handleChange}
        />

        <label htmlFor="password">Email</label>
        <input 
        type="password" 
        name="password"
        placeholder="password" 
        id="password" 
        value={formData.password}
        onChange={handleChange}
        />
        
        <button>Add me to the list</button>
    </form>
    )
}

export default Userform;