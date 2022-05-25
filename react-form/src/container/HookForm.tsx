import {useState} from 'react';
import {useForm} from 'react-hook-form';

function HookForm() {
  const {register, handleSubmit} = useForm();
  const [data, setData] = useState('');

  const handleFormSubmit = (data: any) => {
    setData(data);
    console.log(register('name'));
  }

  return (
    <main>
      <h1>Hook Form</h1>
      <form onSubmit={handleSubmit(data => handleFormSubmit(data))}>
        <input {...register('name')} />
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  );
}

export default HookForm;