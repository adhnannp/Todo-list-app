const TodoList = ({ todos, toggleComplete, deleteTodo, startEditing }) => {
  const notCompletedTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  function formatTime(time) {
    let seconds = Math.floor(time / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days / 30); // Approximation
    let years = Math.floor(months / 12);
  
    if (years > 0) {
      return `${years} yr${years > 1 ? 's' : ''} ago`;
    }
    if (months > 0) {
      return `${months} month${months > 1 ? 's' : ''} ago`;
    }
    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
    if (hours > 0) {
      return `${hours} hr${hours > 1 ? 's' : ''} ago`;
    }
    if (minutes > 0) {
      return `${minutes} min${minutes > 1 ? 's' : ''} ago`;
    }
    return `${seconds} sec ago`;
  }
  

  return (
    <div>
      {notCompletedTodos.length > 0 && (
        <div>
          <h2>Not Completed</h2>
          <ul className="todo-list">
            {notCompletedTodos.map((todo) => (
              <li key={todo.id} className="todo-item">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                />
                <span>{todo.task}</span>
                <div>
                  <button onClick={() => startEditing(todo)} className="edit-button">
                    Edit
                  </button>
                  <button onClick={() => deleteTodo(todo.id)} className="delete-button">
                    Delete
                  </button><br />
                  <span className="time">{formatTime(Date.now()-todo.id)}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {completedTodos.length > 0 && (
        <div>
          <h2>Completed</h2>
          <ul className="todo-list">
            {completedTodos.map((todo) => (
              <li key={todo.id} className="todo-item">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                />
                <span className="completed-task">{todo.task}</span>
                <button onClick={() => deleteTodo(todo.id)} className="delete-button">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TodoList;
