import React, { createContext, useEffect, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {      
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        console.log('Stored Todo: ', storedTodos);

        if (Array.isArray(storedTodos)) {
            setTodos(storedTodos);
        }
    }, []);

    const saveToLocal = (updatedTodos) => {
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }

    const addTodo = (todo, status, id) => {
        const newTodo = { description: todo, status: status, id: id };
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        saveToLocal(updatedTodos);
    };

    const changeStatus = (todoId, status) => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, status: status } : todo
        );
        setTodos(updatedTodos);
        saveToLocal(updatedTodos);
    };

    const removeTodo = (todoId) => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
        saveToLocal(updatedTodos);
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, changeStatus, removeTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export  { TodoContext, TodoProvider };
