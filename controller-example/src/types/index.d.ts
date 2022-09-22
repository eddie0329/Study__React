import type {ReactElement} from 'react'

export type ReactConstructor<A> =
  A extends object ?
    (props: A) => ReactElement :
    () => ReactElement
