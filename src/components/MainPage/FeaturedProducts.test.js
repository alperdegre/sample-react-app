import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import FeaturedProducts from './FeaturedProducts';

describe('FeaturedProducts', () => {
  it('should render the heading', () => {
    render(
      <MemoryRouter>
        <FeaturedProducts />
      </MemoryRouter>
    );
    expect(
      screen.getByText('Featured Products', { exact: false })
    ).toBeInTheDocument();
  });

  it('should render 3 products', () => {
    render(
      <MemoryRouter>
        <FeaturedProducts />
      </MemoryRouter>
    );
    expect(screen.getAllByRole('img')).toHaveLength(3);
  });

  it('should render the shop now button', () => {
    render(
      <MemoryRouter>
        <FeaturedProducts />
      </MemoryRouter>
    );
    expect(screen.getByText('Buy Now')).toBeInTheDocument();
  });
});
