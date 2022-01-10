import React, { useState, useCallback } from "react";
import NameDisplay from "./NameDisplay";

const Test2 = () => {
  const [user, setUser] = useState({ name: 'eddie' });

  const onClick = useCallback(() => {
    if (user.name === 'sam') setUser({ name: 'eddie' });
    else setUser({ name: 'sam' })
  }, [user]);

  return (
    <section>
      <h1>Test2</h1>
      <NameDisplay name={user.name} />
      <button onClick={onClick}>CLICK ME!</button>
    </section>
  );
}

export default Test2;