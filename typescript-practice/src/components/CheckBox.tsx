import React from 'react';

type CheckBoxProps = {
  checked: boolean
}

const CheckBox: React.FC<CheckBoxProps> = ({ checked }) => {
  return <input type="checkbox" checked={checked} />;
}

export default CheckBox;
