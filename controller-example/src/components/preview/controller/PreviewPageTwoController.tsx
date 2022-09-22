/* dependencies */
import React, {ReactElement} from 'react'
/* components */
import MySelector from '../../MySelector';

export default function PreviewPageTwoController(): ReactElement {
  return (
    <div>
      <h1>PreviewPageTwoController</h1>
      <MySelector label="대회 방식" options={['싱글', '더블', '프리포올', '라운드 로빈']} />
    </div>
  )
}