import { render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import CheckoutPage from './CheckoutPage';

describe('CheckoutPage', () => {
  it('should render the CheckoutPage', () => {
    render(<CheckoutPage />);
    expect(screen.getByText('CHECKOUT')).toBeInTheDocument();
  });

  it('should render the Back button only after Next is clicked', () => {
    render(<CheckoutPage />);
    expect(screen.queryByText('BACK')).not.toBeInTheDocument();

    act(() => {
      screen.getByText('NEXT').click();
    });

    expect(screen.getByText('BACK')).toBeInTheDocument();
  });

  it('should change next button to place your order at last step', () => {
    render(<CheckoutPage />);
    expect(screen.queryByText('PLACE YOUR ORDER')).not.toBeInTheDocument();

    act(() => {
      screen.getByText('NEXT').click();
      screen.getByText('NEXT').click();
    });

    expect(screen.getByText('PLACE YOUR ORDER')).toBeInTheDocument();
  });

  it('should render Address Details first', () => {
    render(<CheckoutPage />);
    expect(screen.getByText('ADDRESS DETAILS')).toBeInTheDocument();
  });

  it('should render Cart Details second', () => {
    render(<CheckoutPage />);

    act(() => {
      screen.getByText('NEXT').click();
    });

    expect(screen.getByText('YOUR CART')).toBeInTheDocument();
  });
});
