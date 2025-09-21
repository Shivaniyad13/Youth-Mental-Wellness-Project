import React, { useState, useEffect } from "react";
import "./TodoApp.css"; // Import only for this component

export default function TodoApp() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [taskInput, setTaskInput] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim() === "") return;

    const now = new Date();
    const newTask = {
      text: taskInput.trim(),
      completed: false,
      addedAt: now.toLocaleString(),
      completedAt: null,
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    updated[index].completedAt = updated[index].completed
      ? new Date().toLocaleString()
      : null;
    setTasks(updated);
  };

  const editTask = (index) => {
    const newText = prompt("Edit task:", tasks[index].text);
    if (newText && newText.trim() !== "") {
      const updated = [...tasks];
      updated[index].text = newText.trim();
      setTasks(updated);
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h1>📝  Check To-Do OR NOT</h1>

      <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <div className="section">
        <h2>Pending Tasks</h2>
        <ul>
          {tasks
            .filter((t) => !t.completed)
            .map((task, index) => (
              <li key={index}>
                <span className="task-text">{task.text}</span>
                <span className="task-time">Added: {task.addedAt}</span>
                <div className="actions">
                  <button onClick={() => toggleComplete(index)}>Done</button>
                  <button onClick={() => editTask(index)}>Edit</button>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </div>
              </li>
            ))}
        </ul>
      </div>

      <div className="section">
        <h2>Completed Tasks</h2>
        <ul>
          {tasks
            .filter((t) => t.completed)
            .map((task, index) => (
              <li key={index}>
                <span className="task-text completed">{task.text}</span>
                <span className="task-time">
                  Completed: {task.completedAt}
                </span>
                <div className="actions">
                  <button onClick={() => toggleComplete(index)}>Undo</button>
                  <button onClick={() => editTask(index)}>Edit</button>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
