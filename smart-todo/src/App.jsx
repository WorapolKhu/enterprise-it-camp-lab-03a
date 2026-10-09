// export default App
import { useState } from "react";
import TodoItem from "./TodoItem.jsx";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Read slides", priority: "high", dueDate: "2026-10-10", completed: false },
    { id: 2, title: "Learn React", priority: "medium", dueDate: "2026-10-12", completed: false }
  ]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");

  const onAddTask = (event) => {
    event.preventDefault();
    const taskTitle = title.trim();

    if (!taskTitle || !dueDate) return;

    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        priority,
        dueDate,
        completed: false,
      },
    ]);
    setTitle("");
    setPriority("medium");
    setDueDate("");
  };

  const onToggle = (id) => {
    setTasks((currentTasks) => currentTasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const onDelete = (id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  };

  return (
    <main className="todo-app">
      <header className="todo-app__header">
        <p className="todo-app__eyebrow">Task manager</p>
        <h1>Smart Todo</h1>
      </header>

      <form className="todo-form" onSubmit={onAddTask}>
        <h2>Add a task</h2>
        <div className="todo-form__fields">
          <label className="todo-form__field todo-form__field--title">
            <span>Title</span>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </label>
          <label className="todo-form__field">
            <span>Priority</span>
            <select
              value={priority}
              onChange={(event) => setPriority(event.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          <label className="todo-form__field">
            <span>Due date</span>
            <input
              type="date"
              value={dueDate}
              onChange={(event) => setDueDate(event.target.value)}
              required
            />
          </label>
          <button className="todo-form__submit" type="submit">
            Add task
          </button>
        </div>
      </form>

      <section className="todo-app__list" aria-labelledby="tasks-heading">
        <h2 id="tasks-heading">Tasks</h2>
        {tasks.length === 0 ? (
          <p className="todo-app__empty">No tasks yet.</p>
        ) : (
          <ul className="todo-app__items">
            {tasks.map((task) => (
              <li key={task.id}>
                <TodoItem
                  id={task.id}
                  title={task.title}
                  priority={task.priority}
                  dueDate={task.dueDate}
                  completed={task.completed}
                  onToggle={onToggle}
                  onDelete={onDelete}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}