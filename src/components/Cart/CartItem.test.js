import { render } from '@testing-library/react';
import React from 'react';
import CartItem from './CartItem';

describe('CartItem', () => {
  it('should render the CartItem', () => {
    const { getByText } = render(
      <CartItem
        id="1"
        name="TestName"
        price="10"
        grindType="test"
        amount={10}
      />
    );
    expect(getByText('TestName')).toBeInTheDocument();
  });

  it('should have total price as 80 with a price of 10 and amount of 8', () => {
    const { getByText } = render(
      <CartItem id="1" name="TestName" price="10" grindType="test" amount={8} />
    );
    expect(getByText('80.00')).toBeInTheDocument();
  });
});
