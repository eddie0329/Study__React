import { memo } from 'react';

const ToggleButton = ({ btnInfo, onClick }) => {
  return (
    <button style={{ background: btnInfo.wrong ? 'red' : btnInfo.pressed ? 'blue' : '' }} onClick={() => onClick(btnInfo)}>{btnInfo.label}</button>
  );
};

export default memo(ToggleButton);
