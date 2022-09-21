/* dependencies */
import React, {ReactElement} from 'react'
/* components */
import MyButton from '../MyButton';
/* types */
import type {Preset} from '../../types/preview'

interface PreviewStepButtonProps {
  state: Preset
}

export default function PreviewStepButton({state}: PreviewStepButtonProps): ReactElement {
  const getButtonInfos = () => {
    const buttonTypes = {
      next: {text: '다음', onclick: () => state.step++},
      prev: {text: '이전', onclick: () => state.step--}
    }
    if (state.step === 0) return [buttonTypes.next]
    else if (state.step === 3) return [buttonTypes.prev]
    else return [buttonTypes.prev, buttonTypes.next]
  }

  return <div>{getButtonInfos().map(info => <MyButton key={info.text} onClick={info.onclick}>{info.text}</MyButton>)}</div>
}