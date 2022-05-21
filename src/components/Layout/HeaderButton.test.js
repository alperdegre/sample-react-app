import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import HeaderButton from './HeaderButton';

describe('HeaderButton', () => {
  it('should render the header button', () => {
    render(
      <MemoryRouter>
        <HeaderButton text="Button" to="/" />
      </MemoryRouter>
    );
    expect(screen.getByText('Button')).toBeInTheDocument();
  });
});
