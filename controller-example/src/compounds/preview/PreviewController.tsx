/* dependencies */
import React, {ReactElement, useMemo} from 'react'
/* components */
import PreviewPageOneController from '../../components/preview/controller/PreviewPageOneController';
import PreviewPageTwoController from '../../components/preview/controller/PreviewPageTwoController';
import PreviewPageThreeController from '../../components/preview/controller/PreviewPageThreeController';
import PreviewPageFourController from '../../components/preview/controller/PreviewPageFourController';
/* types */
import type {BasicInfoProps, Preset} from '../../types/preview'
import type {ReactConstructor} from '../../types'

interface PreviewControllerProps {
  state: Preset
}

export default function PreviewController({state}: PreviewControllerProps): ReactElement {
  const RenderedComponent = useMemo(() => {
    const compDefs: Record<string, ReactConstructor<BasicInfoProps>> = {
      '0': PreviewPageOneController,
      '1': PreviewPageTwoController,
      '2': PreviewPageThreeController,
      '3': PreviewPageFourController,
      default: PreviewPageOneController,
    }
    return compDefs[`${state.step}`] ?? compDefs.default
  }, [state.step])

  return (
    <div style={{border: '1px solid gold'}}>
      <h1>PreviewController</h1>
      <RenderedComponent info={state.infos[state.step]} />
    </div>
  )
}