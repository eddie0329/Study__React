import { useMemo } from 'react';

const Kelvin = ({ value }) => {
  const kelvinValue = useMemo(() => {
    return parseInt(value || 0, 10) + 273.15;
  }, [value]);

  return <div className="temp">{kelvinValue}K</div>;
}

export default Kelvin;
