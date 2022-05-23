import { render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import ProductAmountSelector from './ProductAmountSelector';

describe('ProductAmountSelector', () => {
  it('increments input value on plus button clicked', () => {
    const onAmountChange = jest.fn();
    render(<ProductAmountSelector onAmountChange={onAmountChange} />);

    act(() => {
      screen.getByText('+').click();
    });

    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
  });

  it('decrements input value on minus button clicked', () => {
    const onAmountChange = jest.fn();
    render(<ProductAmountSelector onAmountChange={onAmountChange} />);

    act(() => {
      screen.getByText('+').click();
    });

    act(() => {
      screen.getByText('-').click();
    });

    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
  });

  it('calls onAmountChange with the new value when the input value changes', () => {
    const onAmountChange = jest.fn();
    render(<ProductAmountSelector onAmountChange={onAmountChange} />);

    act(() => {
      screen.getByText('+').click();
    });

    expect(onAmountChange).toHaveBeenCalledWith('1');
  });
});
