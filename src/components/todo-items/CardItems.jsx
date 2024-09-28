import TodoItem from "./TodoItem.jsx";

const CardItems = ({items, onDeleteItem}) => {
  const isEmpty = items.length === 0

  const handleDeleteItem = (itemId) => {
    onDeleteItem(itemId)
  }

  return (
    <ul>
      { !isEmpty &&
        items.map((item) => (
          <TodoItem item={item} key={item.id} onDelete={handleDeleteItem} />
        ))
      }
    </ul>
  )
}

export default CardItems
