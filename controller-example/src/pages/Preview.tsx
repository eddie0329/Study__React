/* dependencies */
import React, {ReactElement} from 'react'
/* hooks */
import {useBasicController} from '../hooks/useController';
/* components */
import PreviewController from '../compounds/preview/PreviewController';
import PreviewDisplay from '../compounds/preview/PreviewDisplay';
import PreviewStepButton from '../components/preview/PreviewStepButton';


const preset = {
  step: 0,
}

export default function Preview(): ReactElement {
  const {state} = useBasicController(preset)

  return (
    <>
      <h1>Preview Test</h1>
      <section style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: '10px'}}>
        <PreviewController state={state} />
        <PreviewDisplay state={state} />
      </section>
      <PreviewStepButton state={state} />
    </>
  )
}