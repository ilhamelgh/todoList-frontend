import { PlusCircleIcon } from "@heroicons/react/24/outline/index.js"
import { useState } from "react"

const AddItem = ({onAdd}) => {
  const [item, setItem] = useState('')

  const handleSubmitForm = (e) => {
    e.preventDefault()

    if (item) {
      onAdd(item)
      setItem('')
    }
  }

  const handleInputChange = (e) => {
    setItem(e.target.value)
  }

  return (
    <>
      <form className={'relative'} onSubmit={handleSubmitForm}>
        <input
          name={'item'}
          type={'text'}
          placeholder={'Create new TODO'}
          className={'w-full p-6 rounded bg-gray-800 focus:outline-none focus:ring-0'}
          value={item}
          onChange={handleInputChange}
        />
        <button type={'submit'} className={'absolute inset-y-0 right-0 p-3'}>
          <PlusCircleIcon className={'w-8'} />
        </button>
      </form>
    </>
  )
}

export default AddItem