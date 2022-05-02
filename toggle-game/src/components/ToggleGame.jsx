import { useState, useMemo, useCallback, memo } from 'react';
import Title from './Title';
import ToggleButton from './ToggleButton';

const ToggleGame = () => {
  const [statusBtnArr, setStatusBtnArr] = useState(() => {
    const data = {
      korea: 'seoul',
      japan: 'tokyo',
      china: 'beiging',
    };
    const temp = {};
    Object.entries(data).forEach(([key, value]) => temp[value] = key);
    return [...Object.values(data), ...Object.keys(data)]
      .sort(() => Math.random() - 0.5)
      .map(label => ({ label, wrong: false, pressed: false, answer: data[label] ?? temp[label] }));
  });

  const clickedInfo = useMemo(() => statusBtnArr.find(btnInfo => btnInfo.pressed), [statusBtnArr]);

  const onAnswer = useCallback((label) => {
    setStatusBtnArr(prev => prev.filter(btnInfo => !(btnInfo.pressed || btnInfo.label === label)));
  }, []);

  const onWrong = useCallback((label) => {
    setStatusBtnArr(prev => prev.map(btnInfo => ({ ...btnInfo, wrong: label === btnInfo.label || btnInfo.pressed, pressed: false })));
  }, []);

  const onFirstClicked = useCallback((label) => {
    setStatusBtnArr(prev => prev.map(btnInfo => ({ ...btnInfo, wrong: false, pressed: btnInfo.label === label })));
  }, []);

  const onClickToggleButton = useCallback((info) => {
    if (clickedInfo?.label === info.label) return; /* guard */
    if (!clickedInfo?.answer) {
      onFirstClicked(info.label);
    } else if (clickedInfo?.answer === info.label) {
      onAnswer(info.label);
    } else {
      onWrong(info.label);
    }
  }, [clickedInfo]);

  return (
    <section>
      <Title message="Hello Toggle Game" />
      {
        statusBtnArr.length ?
          statusBtnArr.map(btnInfo => <ToggleButton key={btnInfo.label} btnInfo={btnInfo} onClick={onClickToggleButton}>{btnInfo.label}</ToggleButton>) :
          <div>Congratulation!</div>
      }
    </section>
  );
};

export default ToggleGame;
