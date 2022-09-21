import React, {ReactElement, PropsWithChildren, ButtonHTMLAttributes} from 'react'

export default function MyButton({children, onClick}: PropsWithChildren<ButtonHTMLAttributes<any>>): ReactElement {
  return <button onClick={onClick}>{children}</button>
}