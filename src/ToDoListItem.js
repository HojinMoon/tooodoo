import React from "react"

const ToDoListItem = (props) => {
  const checkItem = () => {
    const checkComponent = document.querySelector("#todo-item" + props.id)
    if (checkComponent.style.cssText) {
      checkComponent.style.cssText = 0
    } else {
      checkComponent.style.cssText = "text-decoration: line-through"
    }
  }

  return (
    <li key={props.items} id={"todo-item" + props.id}>
      <input type="button" value="V" onClick={checkItem} />
      {props.text}
      <input
        type="button"
        value="X"
        onClick={() => {
          props.delete(props.id)
        }}
      />
    </li>
  )
}
export default ToDoListItem
