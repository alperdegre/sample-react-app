import { render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import CartProvider from './CartProvider';
import CartContext from './cart-context';

describe('CartProvider', () => {
  it('should render the children', () => {
    const { getByText } = render(
      <CartProvider>
        <div>test</div>
      </CartProvider>
    );
    expect(getByText('test')).toBeTruthy();
  });

  it('should add a test item to context when addItem is called', () => {
    function TestComponent() {
      const { items, addItem } = React.useContext(CartContext);

      return (
        <div data-testid="test-div">
          <div data-testid="items">
            {items.map((item) => {
              return <div key={item.id}>{item.name}</div>;
            })}
          </div>
          <button
            onClick={() =>
              addItem({
                id: '1',
                name: 'test',
                price: '1',
                grindType: 'test',
                amount: 1,
              })
            }
            type="button"
          >
            AddItem
          </button>
        </div>
      );
    }

    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    act(() => {
      screen.getByRole('button').click();
    });

    expect(screen.getByTestId('items')).toHaveTextContent('test');
  });
});
