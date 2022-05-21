import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import MainPage from './MainPage';

describe('MainPage', () => {
  it('should render the HeaderImage', () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
    expect(screen.getByText('SHOP NOW', { exact: false })).toBeInTheDocument();
  });

  it('should render the ProductMessage', () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
    expect(
      screen.getByText('Our company uses coffee beans roasted to perfection.')
    ).toBeInTheDocument();
  });

  it('should render the Featured Products', () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>
    );
    expect(screen.getByText('Featured Products')).toBeInTheDocument();
  });
});
