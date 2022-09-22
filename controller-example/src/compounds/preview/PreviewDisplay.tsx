/* dependencies */
import React, {ReactElement, useMemo} from 'react'
/* types */
import type {Preset} from '../../types/preview'
import type {ReactConstructor} from '../../types/index'
/* components */
import PreviewPageOneDisplay from '../../components/preview/display/PreviewPageOneDisplay';
import PreviewPageTwoDisplay from '../../components/preview/display/PreviewPageTwoDisplay';
import PreviewPageThreeDisplay from '../../components/preview/display/PreviewPageThreeDisplay';
import PreviewPageFourDisplay from '../../components/preview/display/PreviewPageFourDisplay';
import {BasicInfoProps} from '../../types/preview';

interface PreviewDisplayProps {
  state: Preset
}

export default function PreviewDisplay({state}: PreviewDisplayProps): ReactElement {
  const RenderedComponent = useMemo(() => {
    const defs: Record<string, ReactConstructor<BasicInfoProps>> = {
      '0': PreviewPageOneDisplay,
      '1': PreviewPageTwoDisplay,
      '2': PreviewPageThreeDisplay,
      '3': PreviewPageFourDisplay,
      default: PreviewPageOneDisplay,
    }
    return defs[`${state.step}`] ?? defs.default
  }, [state.step])

  return (
    <div style={{border: '1px solid violet'}}>
      <h1>Preview Display 📌 {`Page-${state.step + 1}`}</h1>
      <RenderedComponent info={state.infos[state.step]} />
    </div>
  )
}