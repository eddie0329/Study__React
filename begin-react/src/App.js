import React, { useRef, useState, useMemo, useCallback } from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "eddie",
      email: "eddie@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "sam",
      email: "sam@gmail.com",
      active: false,
    },
    {
      id: 3,
      username: "tom",
      email: "tom@gmail.com",
      active: false,
    },
  ]);

  const nextId = useRef(4); // component가 re rendering 될때에도 4로 기억이됌

  const onCreate = useCallback(() => {
    const newUser = {
      id: nextId.current,
      username,
      email,
    };
    // 가능
    // setUsers([...users, newUser]);
    setUsers((users) => users.concat(newUser));
    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback((userId) => {
    setUsers((users) => users.filter((user) => user.id !== userId));
  }, []);

  const onToggle = useCallback((userId) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === userId ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello name="react" color="pink" isSpecial />
      <Hello color="blue" isSpecial={false} />
      <hr />
      <Counter />
      <hr />
      <InputSample />
      <hr />
      <h1>CreateUser</h1>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <hr />
      <h1>UserList</h1>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수: {count}</div>
      <hr />
    </Wrapper>
  );
}

export default App;
