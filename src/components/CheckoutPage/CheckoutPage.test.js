import { render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import CheckoutPage from './CheckoutPage';

describe('CheckoutPage', () => {
  it('should render the CheckoutPage', () => {
    render(<CheckoutPage onCheckoutMade={jest.fn()} />);
    expect(screen.getByText('CHECKOUT')).toBeInTheDocument();
  });

  it('should render the Back button only after Next is clicked', () => {
    render(<CheckoutPage onCheckoutMade={jest.fn()} />);
    expect(screen.queryByText('BACK')).not.toBeInTheDocument();

    act(() => {
      screen.getByText('NEXT').click();
    });

    expect(screen.getByText('BACK')).toBeInTheDocument();
  });

  it('should render Address Details first', () => {
    render(<CheckoutPage onCheckoutMade={jest.fn()} />);
    expect(screen.getByText('ADDRESS DETAILS')).toBeInTheDocument();
  });

  it('should render Cart Details second', () => {
    render(<CheckoutPage onCheckoutMade={jest.fn()} />);

    act(() => {
      screen.getByText('NEXT').click();
    });

    expect(screen.getByText('YOUR CART')).toBeInTheDocument();
  });

  it('should render Credit Card Info third', () => {
    render(<CheckoutPage onCheckoutMade={jest.fn()} />);

    act(() => {
      screen.getByText('NEXT').click();
      screen.getByText('NEXT').click();
    });

    expect(screen.getByText('CREDIT CARD INFORMATION')).toBeInTheDocument();
  });
});
