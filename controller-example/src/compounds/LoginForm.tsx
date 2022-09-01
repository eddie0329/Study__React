import React, {ReactElement, FormEvent} from 'react'
import MyInput from '../components/MyInput';
import MyButton from '../components/MyButton';
import {useController} from '../hooks/useController';

interface LoginState {
  id: string
  password: string
}

export default function LoginForm(): ReactElement {
  const {state} = useController<LoginState>({id: '', password: ''})

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(state)
  }

  return (
    <div>
      <h2>LoginForm</h2>
      <form onSubmit={handleSubmit}>
        <MyInput value={state.id} label="아이디" placeholder="이메일" onChange={(e) => state.id = e.target.value} />
        <MyInput value={state.password} label="비밀번호" type="password" placeholder="비밀번호" onChange={(e) => state.password = e.target.value} />
        <MyButton type="submit">제출</MyButton>
      </form>
      <h3>실험 내용:</h3>
      <p>state.id 의 접근으로 제대로 rendering이 되는지 확인</p>
      <hr />
    </div>
  )
}
