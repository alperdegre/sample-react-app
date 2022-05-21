import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

describe('App', () => {
  it('should render the header', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('COFFEE SHOP')).toBeInTheDocument();
  });

  it('should render the main page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('navigates home when you click home button', () => {
    render(
      <MemoryRouter initialEntries={['/products']}>
        <App />
      </MemoryRouter>
    );

    act(() => {
      screen.getByText('Home').click();
    });

    expect(screen.getByText('Shop Now')).toBeInTheDocument();
  });

  it('navigates to products when you click shop now button', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    act(() => {
      screen.getByText('Shop Now').click();
    });

    expect(screen.getByText('Products')).toBeInTheDocument();
  });

  it('navigates to products when you click the products button', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    act(() => {
      screen.getByText('Products').click();
    });

    expect(screen.getByText('Products')).toBeInTheDocument();
  });

  it('navigates to products when you click buy now button', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    act(() => {
      screen.getByText('Buy Now').click();
    });

    expect(screen.getByText('Products')).toBeInTheDocument();
  });
});
