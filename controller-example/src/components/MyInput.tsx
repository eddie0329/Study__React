import React, {ReactElement, InputHTMLAttributes} from 'react'

interface MyInputProps extends InputHTMLAttributes<any> {
  label: string
}

export default function MyInput({label, type, value, onChange, placeholder}: MyInputProps): ReactElement {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}