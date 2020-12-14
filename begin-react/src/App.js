import React, {
  useRef,
  useReducer,
  useMemo,
  useCallback,
  createContext,
} from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from "./useInputs";
import ContextSample from "./ContextSample";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
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
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({
    username: "",
    email: "",
  });
  const { username, email } = form;
  const nextId = useRef(4);
  const { users } = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
    reset();
  }, [username, email, reset]);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={[state, dispatch]}>
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
        <UserList users={users} />
        <div>활성 사용자 수: {count}</div>
        <hr />
        <ContextSample />
        <hr />
      </Wrapper>
    </UserDispatch.Provider>
  );
}

export default App;
