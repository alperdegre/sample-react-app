import { render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import ProductItem from './ProductItem';

describe('ProductItem', () => {
  it('should render a ProductItem with the name Coffee', () => {
    render(<ProductItem name="Coffee" description="description" price="20" />);
    expect(screen.getByText('Coffee')).toBeInTheDocument();
  });

  it('should expand the item when the ProductItem is clicked', () => {
    render(<ProductItem name="Coffee" description="description" price="20" />);
    act(() => {
      screen.getByText('Coffee').click();
    });
    expect(screen.getByText('CLOSE')).toBeInTheDocument();
  });

  it('should close the item when CLOSE button is clicked', () => {
    render(<ProductItem name="Coffee" description="description" price="20" />);
    act(() => {
      screen.getByText('Coffee').click();
    });
    act(() => {
      screen.getByText('CLOSE').click();
    });
    expect(screen.queryByText('CLOSE')).not.toBeInTheDocument();
  });

  it('should increment the price when the plus button is clicked', () => {
    const price = '20';
    render(
      <ProductItem name="Coffee" description="description" price={price} />
    );
    act(() => {
      screen.getByText('Coffee').click();
    });
    act(() => {
      screen.getByText('+').click();
      screen.getByText('+').click();
    });
    const result = (price * 2).toFixed(2).toString();
    expect(screen.getByText(result, { exact: false })).toBeInTheDocument();
  });

  it('should decrement the price when the plus button is clicked', () => {
    const price = '20';
    render(
      <ProductItem name="Coffee" description="description" price={price} />
    );
    act(() => {
      screen.getByText('Coffee').click();
    });
    act(() => {
      screen.getByText('+').click();
      screen.getByText('-').click();
    });
    expect(screen.getByText('0.00', { exact: false })).toBeInTheDocument();
  });

  it('should show the clicked option when a dropdown option is clicked', () => {
    render(<ProductItem name="Coffee" description="description" price="20" />);
    act(() => {
      screen.getByText('Coffee').click();
    });
    act(() => {
      screen.getByText('Select a Type').click();
    });
    expect(screen.getByText('Coarse (French Press)')).toBeInTheDocument();
    act(() => {
      screen.getByText('Coarse (French Press)').click();
    });
    expect(screen.getAllByText('Coarse (French Press)').length).toBe(2);
  });
});
