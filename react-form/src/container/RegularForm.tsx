import React, {useState} from 'react';
import MyInput from '../components/MyInput';

interface FormState {
  name: string;
  description: string;
}

function RegularForm() {
  const initialState: FormState = { name: '', description: '' };
  const [formState, setFormState] = useState<FormState>(initialState);

  const init = () => {
    setFormState(initialState);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`name: ${formState.name}, description: ${formState.description}`);
    init();
  }

  return (
    <main>
      <h1>Regular Form</h1>
      <form onSubmit={onSubmit}>
        <MyInput label={'name'} name={'name'} value={formState.name} setValue={setFormState} />
        <MyInput label={'description'} name={'description'} value={formState.description} setValue={setFormState} />
        <button type={'submit'}>Submit</button>
      </form>
    </main>
  );
}

export default RegularForm;