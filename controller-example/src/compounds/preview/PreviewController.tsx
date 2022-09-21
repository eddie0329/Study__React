/* dependencies */
import React, {ReactElement} from 'react'
/* components */
import PreviewPageOneController from '../../components/preview/controller/PreviewPageOneController';
import PreviewPageTwoController from '../../components/preview/controller/PreviewPageTwoController';
import PreviewPageThreeController from '../../components/preview/controller/PreviewPageThreeController';
import PreviewPageFourController from '../../components/preview/controller/PreviewPageFourController';
/* types */
import type {Preset} from '../../types/preview'

interface PreviewControllerProps {
  state: Preset
}

export default function PreviewController({state}: PreviewControllerProps): ReactElement {
  const renderComponent = (): ReactElement => {
    const compDefs: Record<string, ReactElement> = {
      '0': <PreviewPageOneController />,
      '1': <PreviewPageTwoController />,
      '2': <PreviewPageThreeController />,
      '3': <PreviewPageFourController />,
      default: <PreviewPageOneController />
    }
    return compDefs[`${state.step}`] ?? compDefs.default
  }

  return (
    <div style={{border: '1px solid gold'}}>
      <h1>PreviewController</h1>
      {renderComponent()}
    </div>
  )
}