import React, {useState} from "react";

function NewTodoForm({addTodo}){
    const INITIAL_STATE = {
        title: "",
        desc: ""
    };
    const [todoData, setTodoData] = useState(INITIAL_STATE);

    const handleChange = (event) => {
        setTodoData(prevData => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(todoData);
        setTodoData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
          <input
          id="title"
          type="text" 
          name="title"
          placeholder="Todo title"
          value={todoData.title}
          onChange={handleChange}
          /> 
           
          <input
          id="desc"
          type="text" 
          name="desc"
          placeholder="Todo Description"
          value={todoData.desc}
          onChange={handleChange}
          />  
          <button>Add Todo!</button>
        </form>
    )
}



export default NewTodoForm;