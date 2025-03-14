import React, {useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuidv4 } from "uuid";

function TodoList() {

const [todos, setTodos] = useState([])

const addTodo = (newTodo) => {
   setTodos(todos => [...todos, {...newTodo, id: uuidv4()}]) 
} 

// const removeTodo = (id) => {
//     //return a new array without the selected todo
//     setTodos(todos.filter(todo => todo.id !== id));
// } 
function removeTodo(id) {
    //return a new array without the selected todo
    const result = [];
    for(let i = 0; i < todos.length; i++){
        if (todos[i].id !== id) {
            result.push(todos[i]);
        }
    }
    setTodos(result);
} 

    return (
        <div>
        <h3> Todo List </h3>
        <NewTodoForm addTodo={addTodo} />
            <div>
                {todos.map(({ id, title, desc}) =>
                <Todo 
                    key={id}
                    id={id} 
                    title={title} 
                    desc={desc} 
                    removeTodo={removeTodo} 
                />
                
            )}
            </div>
        </div>
    )
}

export default TodoList;
