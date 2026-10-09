# Smart Todo

This is a small, responsive task manager built with React and Vite. Add tasks with a title, priority, and due date; mark tasks complete or delete them.

## Getting Started

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Using Smart Todo

- Enter a title and due date, choose a priority, then select **Add task**.
- Use **Toggle** to switch a task between incomplete and completed.
- Use **Delete** to remove a task.

The app starts with two example tasks. Tasks are kept in React state and reset to those examples when the page is reloaded.

## TodoItem Checklist

1. **Props:** `TodoItem` renders `title`, `priority`, `dueDate`, and `completed`. It also receives `id` for task actions.
2. **Callbacks:** `App` passes `id={task.id}`. Toggle calls `onToggle(id)` and Delete calls `onDelete(id)`, forwarding that task's ID.
3. **Buttons:** Both actions use real `<button type="button">` elements.
4. **Dependencies:** `TodoItem` imports only its local stylesheet; it uses no additional libraries.
5. **Readability and responsiveness:** Descriptive class names organize the markup and styles. The item wraps on narrow screens, and its actions expand to full width below 480px.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run lint` | Run ESLint. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
