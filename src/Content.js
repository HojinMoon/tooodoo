import React, { useState } from "react"
import TodoList from "./ToDoList"
import ToDoListItem from "./ToDoListItem"

const Content = (props) => {
  const [itemNum, setItemNum] = useState(0)
  const [items, setItems] = useState([])

  const deleteItem = (num) => {
    const selected = document.querySelector("#todo-item" + num)
    if (selected) {
      selected.remove()
    }
  }
  const addItems = () => {
    const inputText = document.querySelector("#inputText")
    if (inputText.value) {
      const tempArr = [...items]
      tempArr.push(
        <ToDoListItem
          id={setItemNum(itemNum + 1)}
          text={inputText.value}
          delete={(num) => {
            deleteItem(num)
          }}
        />
      )
      setItems(tempArr)
    }
  }

  return (
    <div>
      <input autoComplete="off" id="inputText" type="text" placeholder="입력" />
      <input type="button" value="Enter" onClick={addItems} />
      <TodoList items={items} />
    </div>
  )
}

export default Content
