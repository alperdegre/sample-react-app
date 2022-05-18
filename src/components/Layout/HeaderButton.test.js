import { render, screen } from '@testing-library/react';
import React from 'react';
import HeaderButton from './HeaderButton';

describe('HeaderButton', () => {
  it('should render the header button', () => {
    render(<HeaderButton text="Button" />);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });
});
