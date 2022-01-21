import { useMemo } from 'react';

const Fahrenheit = ({ value }) => {
  const fahrenheitValue = useMemo(() => {
    return (parseInt(value || 0, 10) * 9) / 5 + 32;
  }, [value]);

  return <div className="temp">{fahrenheitValue}°F</div>;
}

export default Fahrenheit;
