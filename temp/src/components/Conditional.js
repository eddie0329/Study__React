import React, { useState, useMemo } from "react";

function True() {
  return <div>True</div>;
}

function False() {
  return <div>False</div>;
}

function Conditional() {
  const [status, setStatus] = useState(true);

  const classname = useMemo(() => {
    if (status) return "blue";
    return "red";
  }, [status]);

  const onClick = () => {
    setStatus((temp) => {
      console.log(temp);
      return !status;
    });
    console.log({ status });
  };

  return (
    <div>
      {status ? <True /> : <False />}
      <div className={classname}>status: {`${status}`}</div>
      <button onClick={onClick}>ClickMe!</button>
    </div>
  );
}

export default Conditional;
