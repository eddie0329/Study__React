import React, {Suspense} from 'react'

interface User {
  name: string
}

function fetchTemp(): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({name: 'eddie'}), 1000)
  })
}

function fetchUser() {
  let user: User | null = null;
  const suspender = fetchTemp()
    .then((data) => {
      user = data;
    });
  return {
    read() {
      if (user === null) {
        throw suspender;
      } else {
        return user;
      }
    }
  };
}

function fetchData() {
  return {
    user: fetchUser(),
  };
}

const resources = fetchData()

function Home() {
  const user = resources.user.read();

  return (
    <section>
      <h1>Hello World, { user.name }</h1>
    </section>
  )
}

export default function withHome() {
  return (
    <Suspense fallback={<h1>'loading'</h1>}>
      <Home />
    </Suspense>
  )
}