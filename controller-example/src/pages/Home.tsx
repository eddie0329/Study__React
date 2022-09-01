import React, {ReactElement} from 'react'

export default function Home(): ReactElement {
  return (
    <section>
      <h1>Home</h1>
      <p>이곳은 Controller 시험 장소 입니다! 🌈</p>
      <ul>
        <ol><h2>📌 페이지 설명</h2></ol>
        <li>Form - 다양한 종류의 Form을 컨트롤러를 이용해서 구현합니다.</li>
        <li>Todos - 간단한 API를 통해 crud를 시험합니다.</li>
      </ul>
    </section>

  )
}
