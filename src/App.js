import React, { useState, useRef } from "react";
import UserList from "./UserList";
import CreateUsers from "./CreateUsers";
function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    if (!user) {
      return;
    }
    setUsers([...users, user]);
    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
  };

  return (
    <>
      <CreateUsers
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  );
}

export default App;
