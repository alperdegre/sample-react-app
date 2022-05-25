import { render, screen } from '@testing-library/react';
import React from 'react';
import CheckoutAddress from './CheckoutAddress';

describe('CheckoutAddress', () => {
  it('should render the CheckoutAddress', () => {
    render(<CheckoutAddress onAddressSet={jest.fn()} />);
    expect(screen.getByText('ADDRESS DETAILS')).toBeInTheDocument();
  });

  it('should render the input labels', () => {
    render(<CheckoutAddress onAddressSet={jest.fn()} />);
    expect(screen.getByText('First Name')).toBeInTheDocument();
    expect(screen.getByText('Last Name')).toBeInTheDocument();
    expect(screen.getByText('Address')).toBeInTheDocument();
    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByText('State')).toBeInTheDocument();
    expect(screen.getByText('Zip/Postal Code')).toBeInTheDocument();
    expect(screen.getByText('Country')).toBeInTheDocument();
  });

  it('should render the input fields', () => {
    render(<CheckoutAddress onAddressSet={jest.fn()} />);
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('City')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('State')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Zip/Postal Code')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Country')).toBeInTheDocument();
  });
});
