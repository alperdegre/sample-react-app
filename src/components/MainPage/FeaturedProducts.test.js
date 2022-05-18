import { render, screen } from '@testing-library/react';
import React from 'react';
import FeaturedProducts from './FeaturedProducts';

describe('FeaturedProducts', () => {
  it('should render the heading', () => {
    render(<FeaturedProducts />);
    expect(
      screen.getByText('Featured Products', { exact: false })
    ).toBeInTheDocument();
  });

  it('should render 3 products', () => {
    render(<FeaturedProducts />);
    expect(screen.getAllByRole('img')).toHaveLength(3);
  });

  it('should render the shop now button', () => {
    render(<FeaturedProducts />);
    expect(screen.getByText('Buy Now')).toBeInTheDocument();
  });
});
