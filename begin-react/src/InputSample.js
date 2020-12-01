import React, { useState } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    // 객체 상태를 업테이트 할때는 불변성을 지켜줘야 합니다.
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const initText = () => {
    setInputs({
      name: "",
      nickname: "",
    });
  };

  return (
    <div>
      <input name="name" placeholder="name" onChange={onChange} value={name} />
      <input
        name="nickname"
        placeholder="nickname"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={initText}>init</button>
      <div>
        <b>value: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
