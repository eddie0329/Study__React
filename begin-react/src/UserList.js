import React from "react";

function User({ user }) {
  return (
    <div>
      <b>
        {user.username} <span>{user.email}</span>
      </b>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: "eddie",
      email: "eddie@gmail.com",
    },
    {
      id: 2,
      username: "sam",
      email: "sam@gmail.com",
    },
    {
      id: 3,
      username: "tom",
      email: "tom@gmail.com",
    },
  ];
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
