import React, { useEffect } from "react";

function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  useEffect(() => {
    console.log("유저 값이 설정됨");
    console.log(user);

    return () => {
      console.log("유저 값이 바뀌기 전");
      console.log(user);
    };
  }, [user]);

  return (
    <div>
      <b
        onClick={() => onToggle(id)}
        style={{
          color: active ? "green" : "black",
          cursor: "pointer",
        }}
      >
        {username}
      </b>
      <span>{email}</span>
      <button onClick={() => onRemove(id)}>X</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
