import TodoItem from "./TodoItem.jsx";

const CardItems = ({items, onDeleteItem}) => {
  const isEmpty = items.length === 0

  const handleDeleteItem = (itemId) => {
    onDeleteItem(itemId)
  }

  return (
    <div>
      { !isEmpty &&
        items.map((item) => (
          <TodoItem item={item} key={item.id} onDelete={handleDeleteItem} />
        ))
      }
    </div>
  )
}

export default CardItems
