import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}
export default function UserList() {
  const users = [
    {
      id: 1,
      username: "승가리",
      email: "imsa1224@naver.com",
    },
    {
      id: 2,
      username: "승까리",
      email: "imsa12224@naver.com",
    },
    {
      id: 3,
      username: "승구리",
      email: "imsa21224@naver.com",
    },
  ];
  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={index} />
      ))}
    </div>
  );
}
