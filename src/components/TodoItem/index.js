// Write your code here

import './index.css'

const TodoItem = Props => {
  const {todoList, deleteTodo} = Props

  const {title, id} = todoList

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-sub-container">
      <p className="Title">{title}</p>
      <button className="Delete" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
