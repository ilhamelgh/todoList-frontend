import { useState } from "react"

import AddItem from "../components/todo-items/AddItem.jsx"
import CardItems from "../components/todo-items/CardItems.jsx"

const Home = () => {
  const [items, setItems] = useState([])
  const handleAddItem = (item) => {
    setItems([...items, item])
  }
  const handleDeleteItem = (item) => {
    let newList = items.filter((value) => value !== item)
    setItems(newList)
  }

  return (
    <div>
      <h1 className={'font-semibold mb-10'}>TODO</h1>
      <AddItem onAdd={handleAddItem} />
      <div className={'mt-5'}>
        <CardItems items={items} onDeleteItem={handleDeleteItem} />
      </div>
    </div>
  )
}

export default Home
