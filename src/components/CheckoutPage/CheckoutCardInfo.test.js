import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import CheckoutCardInfo from './CheckoutCardInfo';

describe('CheckoutCardInfo', () => {
  it('should render the CheckoutCardInfo', () => {
    render(<CheckoutCardInfo />);
    expect(screen.getByText('CREDIT CARD INFORMATION')).toBeInTheDocument();
  });

  it('should be able to write a first name', () => {
    render(<CheckoutCardInfo />);
    const input = screen.getByPlaceholderText('First Name');
    fireEvent.change(input, { target: { value: 'John' } });
    expect(input.value).toBe('John');
  });

  it('should be able to write a last name', () => {
    render(<CheckoutCardInfo />);
    const input = screen.getByPlaceholderText('Last Name');
    fireEvent.change(input, { target: { value: 'Doe' } });
    expect(input.value).toBe('Doe');
  });

  it('should be able to write a card number', () => {
    render(<CheckoutCardInfo />);
    const input = screen.getByTestId('card-number-input');
    fireEvent.change(input, { target: { value: '1234567890123456' } });
    expect(input.value).toBe('1234  5678  9012  3456');
  });

  it("shouldn't be able to write letters as a card number", () => {
    render(<CheckoutCardInfo />);
    const input = screen.getByTestId('card-number-input');
    fireEvent.change(input, { target: { value: 'aaaabbbb' } });
    expect(input.value).toBe('');
  });

  it('should be able to write a card expiry date', () => {
    render(<CheckoutCardInfo />);
    const input = screen.getByTestId('expiration-date-input');
    fireEvent.change(input, { target: { value: '1220' } });
    expect(input.value).toBe('12/20');
  });

  it("shouldn't be able to write letters as card expiry date", () => {
    render(<CheckoutCardInfo />);
    const input = screen.getByTestId('expiration-date-input');
    fireEvent.change(input, { target: { value: 'aaa' } });
    expect(input.value).toBe('');
  });

  it('should be able to write a card CVC', () => {
    render(<CheckoutCardInfo />);
    const input = screen.getByTestId('cvc-number-input');
    fireEvent.change(input, { target: { value: '123' } });
    expect(input.value).toBe('123');
  });

  it("shouldn't be able to write letters as cvc", () => {
    render(<CheckoutCardInfo />);
    const input = screen.getByTestId('cvc-number-input');
    fireEvent.change(input, { target: { value: 'aa' } });
    expect(input.value).toBe('');
  });

  it('should have default credit card icon', () => {
    render(<CheckoutCardInfo />);
    expect(screen.getByAltText('No Credit Card Icon')).toBeInTheDocument();
  });

  it('should have Visa card icon when a Visa IIN is entered', () => {
    render(<CheckoutCardInfo />);
    const input = screen.getByTestId('card-number-input');
    fireEvent.change(input, { target: { value: '4' } });
    expect(screen.getByAltText('Visa Credit Card Icon')).toBeInTheDocument();
  });

  it('should have MasterCard card icon when a MasterCard IIN is entered', () => {
    render(<CheckoutCardInfo />);
    const input = screen.getByTestId('card-number-input');
    fireEvent.change(input, { target: { value: '51' } });
    expect(
      screen.getByAltText('MasterCard Credit Card Icon')
    ).toBeInTheDocument();
  });

  it('should have American Express card icon when an American Express IIN is entered', () => {
    render(<CheckoutCardInfo />);
    const input = screen.getByTestId('card-number-input');
    fireEvent.change(input, { target: { value: '34' } });
    expect(
      screen.getByAltText('American Express Credit Card Icon')
    ).toBeInTheDocument();
  });

  it('should have Discover card icon when a Discover IIN is entered', () => {
    render(<CheckoutCardInfo />);
    const input = screen.getByTestId('card-number-input');
    fireEvent.change(input, { target: { value: '6011' } });
    expect(
      screen.getByAltText('Discover Credit Card Icon')
    ).toBeInTheDocument();
  });
});
