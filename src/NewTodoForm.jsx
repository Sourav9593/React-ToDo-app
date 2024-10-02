import { useState } from "react"
import { RiTodoFill } from "react-icons/ri";


export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("")
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <div className="heading">
        <RiTodoFill />
        <h1>TO-Do LIST</h1>
        </div>
        <input
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          placeholder="Add your task"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}
