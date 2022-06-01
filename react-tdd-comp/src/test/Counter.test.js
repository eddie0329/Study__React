import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Counter from '../components/Counter';

it('test counter', () => {
  const { getByText, container, asFragment} = render(<Counter />);

  console.log(screen.getByText(/Count:/));
});
