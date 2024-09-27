import TodoItem from "./TodoItem.jsx";

const CardItems = ({items, onDeleteItem}) => {
  const isEmpty = items.length === 0

  const handleDeleteItem = (item) => {
    onDeleteItem(item)
  }

  return (
    <div>
      { !isEmpty &&
        items.map((item, index) => (
          <TodoItem item={item} key={index} onDelete={handleDeleteItem} />
        ))
      }
    </div>
  )
}

export default CardItems
