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
    <form onSubmit={handleSubmit}>
      <MyInput value={state.id} label="아이디" placeholder="이메일" onChange={(e) => state.id = e.target.value} />
      <MyInput value={state.password} label="비밀번호" type="password" placeholder="비밀번호" onChange={(e) => state.password = e.target.value} />
      <MyButton type="submit">제출</MyButton>
    </form>
  )
}
