import React, {ReactElement, FormEvent, useState} from 'react'

interface TodoInputProps {
  addTodo: Function
}

export default function TodoInput({addTodo}: TodoInputProps): ReactElement {
  const [value, setValue] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!value.trim()) return /* guard */
    await addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">SUBMIT</button>
    </form>
  )
}