import React, {ReactElement, SyntheticEvent} from 'react'

interface MySelectorProps {
  options: string[]
  label: string
  value?: any
  onSelect?: (e: SyntheticEvent<HTMLSelectElement, Event>) => void
}

export default function MySelector({options, label, value, onSelect}: MySelectorProps): ReactElement {
  return (
    <div>
      <span>{label}</span>
      <select value={value} onSelect={onSelect}>
        {options.map((info, key) => <option key={`${info}-${key}`}>{info}</option>)}
      </select>
    </div>
  )
}