/* dependencies */
import React, {ReactElement} from 'react'
/* types */
import type {Preset} from '../types/preview'
/* hooks */
import {useBasicController} from '../hooks/useController';
/* components */
import PreviewController from '../compounds/preview/PreviewController';
import PreviewDisplay from '../compounds/preview/PreviewDisplay';
import PreviewStepButton from '../components/preview/PreviewStepButton';


const preset: Preset = {
  step: 0,
  infos: [
    /* step 0 */
    {
      title: {key: 'title', value: '에디의 대회'},
      introduction: {key: 'introduction', value: '에디 대회 소개'},
      map: {key: 'map', value: ''}
    },
    /* step 1 */
    {},
    /* step 2 */
    {},
    /* step 3 */
    {},
  ]
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