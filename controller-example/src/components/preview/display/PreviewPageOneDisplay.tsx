/* dependencies */
import React, {ReactElement} from 'react'
/* types */
import {BasicInfoProps} from '../../../types/preview';

interface PreviewPageOneDisplayProps extends BasicInfoProps {
}

export default function PreviewPageOneDisplay({info}: PreviewPageOneDisplayProps): ReactElement {
  return (
    <div>
      <h1>PreviewPageOneDisplay</h1>
      {Object.values(info).map((def) => <div key={def.key}>{`${def.key}: ${def.value}`}</div>)}
    </div>
  )
}
