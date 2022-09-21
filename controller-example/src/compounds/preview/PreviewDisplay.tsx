/* dependencies */
import React, {ReactElement} from 'react'
/* types */
import type {Preset} from '../../types/preview'

interface PreviewDisplayProps {
  state: Preset
}

export default function PreviewDisplay({state}: PreviewDisplayProps): ReactElement {
  return (
    <div style={{border: '1px solid violet'}}>
      <h1>Preview Display 📌 {`Page-${state.step + 1}`}</h1>
    </div>
  )
}