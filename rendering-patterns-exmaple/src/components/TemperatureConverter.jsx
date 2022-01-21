import { useState } from 'react';

const TemperatureConverter = ({ render }) => {
  const [value, setValue] = useState('');
  return (
    <section>
      <h1>Temperature Converter</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      { render(value) }
    </section>
  );
};

export default TemperatureConverter;
