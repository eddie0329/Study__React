import React from 'react';
import { render } from '@testing-library/react';

import Hello from '../components/Hello';

it('renders without name', () => {
  const {container} = render(<Hello />);
  expect(container.textContent).toBe('Hey, stranger!');
});

it('renders with name', () => {
  const {container} = render(<Hello name={'eddie'} />);
  expect(container.textContent).toBe('Hello, eddie.');
});
