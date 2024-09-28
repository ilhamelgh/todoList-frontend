import {useEffect, useState} from "react"

import AddItem from "../components/todo-items/AddItem.jsx"
import CardItems from "../components/todo-items/CardItems.jsx"

import itemService from "../services/modules/item.service.js"

const Home = () => {
  const [items, setItems] = useState([])

  const getAllItems = async () => {
    const { data } = await itemService.getAllItems()

    return data
  }
  const fetchItems = async () => {
    const response = await getAllItems()
    setItems(response)
  }
  const handleDeleteItem = async (itemId) => {
    await itemService.deleteItem(itemId)
    await fetchItems()
  }

  useEffect(() => {
    getAllItems().then(r => {
      setItems(r)
    })
  }, [])

  return (
    <div>
      <h1 className={'font-semibold mb-10'}>TODO</h1>
      <AddItem onAdd={fetchItems} />
      <div className={'mt-5'}>
        <CardItems items={items} onDeleteItem={handleDeleteItem} />
      </div>
    </div>
  )
}

export default Home
