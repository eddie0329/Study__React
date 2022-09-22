/* dependencies */
import React, {ReactElement} from 'react'
/* types */
import type {BasicInfoProps} from '../../../types/preview'
/* components */
import MyInput from '../../MyInput';

interface PreviewPageOneControllerProps extends BasicInfoProps {
}

const defs = [
  {key: 'title', label: '대회명', placeholder: '대회명'},
  {key: 'introduction', label: '대회 소개', placeholder: '대회 소개'},
  {key: 'map', label: '맵 이름', placeholder: '맵 이름'},
]

export default function PreviewPageOneController({info}: PreviewPageOneControllerProps): ReactElement {
  return (
    <div>
      <h1>PreviewPageOneController</h1>
      {defs.map(({key, label, placeholder}) => <MyInput key={key} label={label} value={info[key].value} onChange={(e) => info[key].value = e.target.value} placeholder={placeholder} />)}
    </div>
  )
}
