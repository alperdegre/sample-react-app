import { render } from '@testing-library/react';
import React from 'react';
import ShopIcon from './ShopIcon';

describe('ShopIcon', () => {
  it('should render the icon', () => {
    const onShowCart = jest.fn();
    render(<ShopIcon onShowCart={onShowCart} />);
    const svg = document.getElementsByClassName('shop-icon').item(0);
    expect(svg).toBeInTheDocument();
  });
});
