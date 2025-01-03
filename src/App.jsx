import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./index.css";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    if (editTodo) {
      setTodos(
        todos.map((todo) =>
          todo.id === editTodo.id ? { ...todo, task } : todo
        )
      );
      setEditTodo(null);
    } else {
      setTodos([...todos, { id: Date.now(), task, completed: false }]);
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const startEditing = (todo) => {
    setEditTodo(todo);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} editTodo={editTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        startEditing={startEditing}
      />
    </div>
  );
};

export default App;
