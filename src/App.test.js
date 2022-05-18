import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('App', () => {
  it('should render the header', () => {
    render(<App />);
    expect(screen.getByText('COFFEE SHOP')).toBeInTheDocument();
  });

  it('should render the main page', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
