import { TrashIcon } from "@heroicons/react/24/outline/index.js"

const TodoItem = ({item, onDelete}) => {
  const deleteItem = () => {
    onDelete(item)
  }

  return (
    <div className={'flex items-center justify-between bg-gray-800 rounded p-6 mb-3'}>
      <span>{ item }</span>
      <button type={'button'} onClick={deleteItem}>
        <TrashIcon className={'w-6 text-rose-400'} />
      </button>
    </div>
  )
}

export default TodoItem
