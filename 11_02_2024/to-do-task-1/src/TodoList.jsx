import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

const TodoList = () => {
    const { todos, addTodo, changeStatus, removeTodo } = useContext(TodoContext);
    const [input, setInput] = useState('');

    const handleAddTodo = () => {
        if(input.length<=0){
            alert('Enter Text to save!');
            return;
        }
        const id = Date.now().toString();
        addTodo(input, "pending", id);
        setInput('');
    };

    const handleChangeStatus = (todoId, status) => {
        changeStatus(todoId, status);
    };

    const handleRemoveTodo = (todoId) => {
        removeTodo(todoId);
    };

    return (
        <div className="todo-container">
            <div className="input">
                <textarea className="todo-input" type="text" placeholder="Enter todo.." value={input} onChange={(e) => setInput(e.target.value)} multiline='true'/>
                <div>
                <button onClick={handleAddTodo}>Add Todo</button>
                </div>
            </div>
            
            <div className="todo-list">
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id} className="todo-item">
                            <span className="todo-description">{todo.description}</span>
                            <span className="todo-status">Status: {todo.status}</span>
                            <select className="todo-select" value={todo.status} onChange={(e) => handleChangeStatus(todo.id, e.target.value)}>
                                <option value="pending">Pending</option>
                                <option value="completed">Completed</option>
                            </select>
                            <button className="todo-remove" onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
