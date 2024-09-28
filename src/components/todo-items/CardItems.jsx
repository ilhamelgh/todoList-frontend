import {TrashIcon} from "@heroicons/react/24/outline/index.js";

const CardItems = ({items, onDeleteItem}) => {
  const isEmpty = items.length === 0

  const handleDeleteItem = (itemId) => {
    onDeleteItem(itemId)
  }

  return (
    <ul>
      { !isEmpty &&
        items.map((item) => (
          <li
            key={item.id}
            className={'flex items-center justify-between bg-gray-800 rounded p-6 mb-3'}
            draggable={true}
          >
            <span>{ item.title }</span>
            <button type={'button'} onClick={() => {handleDeleteItem(item.id)}}>
              <TrashIcon className={'w-6 text-rose-400'} />
            </button>
          </li>
        ))
      }
    </ul>
  )
}

export default CardItems
