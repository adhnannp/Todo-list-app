import React, { useState, useEffect } from "react";

const TodoForm = ({ addTodo, editTodo }) => {
  const [task, setTask] = useState("");

  useEffect(() => {
    if (editTodo) {
      setTask(editTodo.task);
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task.trim());
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        {editTodo ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
