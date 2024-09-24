import TodoItem from "./TodoItem.jsx";

const CardItems = ({items}) => {
  const isEmpty = items.length === 0

  return (
    <div>
      { !isEmpty &&
        items.map((item, index) => (
          <TodoItem item={item} key={index} />
        ))
      }
    </div>
  )
}

export default CardItems
