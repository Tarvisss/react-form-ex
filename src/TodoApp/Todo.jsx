import React from "react";

const Todo = ({ id, title, desc, removeTodo }) => {

   return (
    <ul>
        <li>Title: {title}</li>
        <li>Todo: {desc}</li>
        <button onClick={() => removeTodo(id)}>Romove</button>
    </ul>
   )
}


export default Todo;