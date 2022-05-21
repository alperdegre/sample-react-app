import { render, screen } from '@testing-library/react';
import React from 'react';
import ProductsPage from './ProductsPage';

describe('ProductsPage', () => {
  it('should render the page', () => {
    render(<ProductsPage />);
    expect(screen.getByText('ALL PRODUCTS')).toBeInTheDocument();
  });

  it('should render the coffee data from json', () => {
    render(<ProductsPage />);
    expect(screen.getByText('Nicaragua')).toBeInTheDocument();
  });
});
