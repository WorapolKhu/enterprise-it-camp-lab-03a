// export default App
import { useState } from "react";
import TodoItem from "./TodoItem.jsx";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Read slides", priority: "high", dueDate: "2026-10-10", completed: false },
    { id: 2, title: "Learn React", priority: "medium", dueDate: "2026-10-12", completed: false }
  ]);

  const onToggle = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const onDelete = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <main>
      <h1>Smart Todo</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map(task => (
          <TodoItem
            key={task.id}
            id={task.id}
            title={task.title}
            priority={task.priority}
            dueDate={task.dueDate}
            completed={task.completed}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </main>
  );
}