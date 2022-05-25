import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import React from 'react';
import CheckoutNextButton from './CheckoutNextButton';

describe('CheckoutNextButton', () => {
  it('should render the AboutImage', () => {
    const onClick = jest.fn();
    render(<CheckoutNextButton text="TEST" onClick={onClick} />);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  it('should call onClick when the button is clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <CheckoutNextButton text="TEST" onClick={onClick} />
    );
    act(() => {
      getByText('TEST').click();
    });

    expect(onClick).toHaveBeenCalled();
  });
});
