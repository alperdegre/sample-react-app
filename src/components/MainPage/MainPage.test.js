import { render, screen } from '@testing-library/react';
import React from 'react';
import MainPage from './MainPage';

describe('MainPage', () => {
  it('should render the HeaderImage', () => {
    render(<MainPage />);
    expect(screen.getByText('SHOP NOW', { exact: false })).toBeInTheDocument();
  });

  it('should render the ProductMessage', () => {
    render(<MainPage />);
    expect(
      screen.getByText('Our company uses coffee beans roasted to perfection.')
    ).toBeInTheDocument();
  });

  it('should render the Featured Products', () => {
    render(<MainPage />);
    expect(screen.getByText('Featured Products')).toBeInTheDocument();
  });
});
