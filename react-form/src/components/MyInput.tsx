import React, {useCallback} from 'react';

interface MyInputProps {
  label?: string;
  name?: string;
  value: string | number;
  setValue: any;
}

function MyInput({label = '', name = '', value, setValue}: MyInputProps) {
  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (name) setValue((prev: any) => ({...prev, [e.target.name]: e.target.value}));
    else setValue(e.target.value);
  }, [setValue]);

  return (
    <div>
      <label>{label}</label>
      <input name={name} value={value} onChange={handleInput} />
    </div>
  );
}

export default MyInput;