import React, {ReactElement, PropsWithChildren, ButtonHTMLAttributes} from 'react'

export default function MyButton({children}: PropsWithChildren<ButtonHTMLAttributes<any>>): ReactElement {
  return <button>{children}</button>
}