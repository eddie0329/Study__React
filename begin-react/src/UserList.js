import React, { useEffect, useContext } from "react";
import { UserDispatch } from "./App";

const User = React.memo(function User({ user }) {
  const { username, email, id, active } = user;

  const [state, dispatch] = useContext(UserDispatch);

  useEffect(() => {
    console.log("유저 값이 설정됨");
    console.log(user);
    console.log('state', state);

    return () => {
      console.log("유저 값이 바뀌기 전");
      console.log(user);
    };
  }, [user, state]);

  return (
    <div>
      <b
        onClick={() => dispatch({ type: "TOGGLE_USER", id })}
        style={{
          color: active ? "green" : "black",
          cursor: "pointer",
        }}
      >
        {username}
      </b>
      <span>{email}</span>
      <button onClick={() => dispatch({ type: "REMOVE_USER", id })}>X</button>
    </div>
  );
});

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default React.memo(
  UserList,
  (prevProps, nextProps) => prevProps.users === nextProps.users
);
