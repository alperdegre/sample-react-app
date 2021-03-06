import { render, screen } from '@testing-library/react';
import React from 'react';
import CheckoutCart from './CheckoutCart';

describe('CheckoutCart', () => {
  it('should render the CheckoutCart', () => {
    render(<CheckoutCart onCoffeesSet={jest.fn()} />);
    expect(screen.getByText('YOUR CART')).toBeInTheDocument();
  });

  it('should render the Cart div', () => {
    render(<CheckoutCart onCoffeesSet={jest.fn()} />);
    expect(
      screen.getByText('There are no items in your cart')
    ).toBeInTheDocument();
  });

  it('should render the Details div', () => {
    render(<CheckoutCart onCoffeesSet={jest.fn()} />);
    expect(screen.getByText('DETAILS')).toBeInTheDocument();
  });
});
