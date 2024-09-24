import AddItem from "../components/todo-items/AddItem.jsx"
import CardItems from "../components/todo-items/CardItems.jsx"
import {useState} from "react";

const Home = () => {
  const [items, setItems] = useState([])
  const handleAddItem = (item) => {
    setItems([...items, item])
  }
  return (
    <div>
      <h1 className={'font-semibold mb-10'}>TODO</h1>
      <AddItem onAdd={handleAddItem} />
      <div className={'mt-5'}>
        <CardItems items={items} />
      </div>
    </div>
  )
}

export default Home
