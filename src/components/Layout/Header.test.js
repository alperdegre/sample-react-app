import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  it('should render the header', () => {
    const onShowCart = jest.fn();

    render(
      <MemoryRouter>
        <Header onShowCart={onShowCart} />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render the cart button on products', () => {
    const onShowCart = jest.fn();

    render(
      <MemoryRouter initialEntries={['/products']}>
        <Header onShowCart={onShowCart} />
      </MemoryRouter>
    );
    const svg = document.getElementsByClassName('shop-icon').item(0);
    expect(svg).toBeInTheDocument();
  });
});
