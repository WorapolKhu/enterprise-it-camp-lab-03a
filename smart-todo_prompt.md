# TodoItem Component for Smart Todo

You are a Senior Frontend Engineer.

Create a React functional component named TodoItem for a Smart Todo UI.

Props:

- title: string
- priority: "low" | "medium" | "high"
- dueDate: string
- completed: boolean
- onToggle: function
- onDelete: function

Requirements:

- Display the task title, priority, due date, and completed status.
- Add a Toggle button and a Delete button.
- When Toggle is clicked, call onToggle(task.id).
- When Delete is clicked, call onDelete(task.id).
- Use no extra libraries.
- Use real <button> elements.
- Keep the code readable and responsive.
- Do not add features beyond this requirement.

Return:

1. The React code
2. A short explanation of the props, state, and event flow