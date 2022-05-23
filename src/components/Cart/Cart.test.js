import { render } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Cart from './Cart';

describe('Cart', () => {
  it('should render the cart', () => {
    const onClose = jest.fn();
    const { getByText } = render(<Cart onClose={onClose} />);
    expect(getByText('SHOPPING CART')).toBeInTheDocument();
  });

  it('should call onclose when the CLOSE button is clicked', () => {
    const onClose = jest.fn();
    const { getByText } = render(<Cart onClose={onClose} />);
    act(() => {
      getByText('CLOSE').click();
    });

    expect(onClose).toHaveBeenCalled();
  });

  it('should call onclose when backdrop is clicked', () => {
    const onClose = jest.fn();
    const { getByLabelText } = render(<Cart onClose={onClose} />);
    act(() => {
      getByLabelText('Close modal').click();
    });

    expect(onClose).toHaveBeenCalled();
  });
});
