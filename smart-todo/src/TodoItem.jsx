import './TodoItem.css'

export default function TodoItem({
  id,
  title,
  priority,
  dueDate,
  completed,
  onToggle,
  onDelete,
}) {
  return (
    <article
      className={`todo-item${completed ? ' todo-item--completed' : ''}`}
    >
      <div className="todo-item__content">
        <h2 className="todo-item__title">{title}</h2>
        <dl className="todo-item__details">
          <div className="todo-item__detail">
            <dt>Priority</dt>
            <dd className="todo-item__priority">{priority}</dd>
          </div>
          <div className="todo-item__detail">
            <dt>Due date</dt>
            <dd>{dueDate}</dd>
          </div>
          <div className="todo-item__detail">
            <dt>Status</dt>
            <dd>{completed ? 'Completed' : 'Incomplete'}</dd>
          </div>
        </dl>
      </div>

      <div className="todo-item__actions">
        <button
          type="button"
          aria-pressed={completed}
          onClick={() => onToggle(id)}
        >
          Toggle
        </button>
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </article>
  )
}