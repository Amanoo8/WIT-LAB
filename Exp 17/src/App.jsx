import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Add new task
  const addTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="container">

      <h1>My To-Do List</h1>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter your task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks available. Add a new task!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>

              <span
                onClick={() => toggleTask(task.id)}
                className={task.completed ? "completed" : ""}
              >
                {task.text}
              </span>

              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>

            </li>
          ))}
        </ul>
      )}

      <p>Total Tasks: {tasks.length}</p>

    </div>
  );
}

export default App;