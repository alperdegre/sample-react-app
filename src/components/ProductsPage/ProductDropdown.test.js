import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import ProductDropdown from './ProductDropdown';

describe('ProductDropdown', () => {
  it('opens the dropdown when clicked', () => {
    const onSelected = jest.fn();
    const dropdownItems = [
      { id: 1, title: 'Extra Coarse (Cold Brew)', value: 'extra-coarse' },
      { id: 2, title: 'Coarse (French Press)', value: 'coarse' },
      { id: 3, title: 'Medium-Coarse (Chemex)', value: 'medium-coarse' },
      { id: 4, title: 'Medium', value: 'medium' },
      { id: 5, title: 'Medium-Fine (Pour Over)', value: 'medium-fine' },
      { id: 6, title: 'Fine (Espresso)', value: 'fine' },
      { id: 7, title: 'Extra Fine (Turkish Coffee)', value: 'extra-fine' },
    ];
    const { container } = render(
      <ProductDropdown
        onSelected={onSelected}
        items={dropdownItems}
        placeholderText="TestDropdown"
      />
    );

    act(() => {
      screen.getByText('TestDropdown').click();
    });

    expect(
      container.getElementsByClassName('dropdown-content dropdown-hidden')
        .length
    ).toBe(0);
  });

  it('calls onSelected with the selected item when an item is clicked', () => {
    const onSelected = jest.fn();
    const dropdownItems = [
      { id: 1, title: 'Extra Coarse (Cold Brew)', value: 'extra-coarse' },
      { id: 2, title: 'Coarse (French Press)', value: 'coarse' },
      { id: 3, title: 'Medium-Coarse (Chemex)', value: 'medium-coarse' },
      { id: 4, title: 'Medium', value: 'medium' },
      { id: 5, title: 'Medium-Fine (Pour Over)', value: 'medium-fine' },
      { id: 6, title: 'Fine (Espresso)', value: 'fine' },
      { id: 7, title: 'Extra Fine (Turkish Coffee)', value: 'extra-fine' },
    ];
    render(
      <ProductDropdown
        onSelected={onSelected}
        items={dropdownItems}
        placeholderText="TestDropdown"
      />
    );

    act(() => {
      screen.getByText('TestDropdown').click();
    });

    act(() => {
      screen.getByText('Extra Coarse (Cold Brew)').click();
    });

    expect(onSelected).toHaveBeenCalledWith({
      id: 1,
      title: 'Extra Coarse (Cold Brew)',
      value: 'extra-coarse',
    });
  });

  it('closes the dropdown when clicked on an item', () => {
    const onSelected = jest.fn();
    const dropdownItems = [
      { id: 1, title: 'Extra Coarse (Cold Brew)', value: 'extra-coarse' },
      { id: 2, title: 'Coarse (French Press)', value: 'coarse' },
      { id: 3, title: 'Medium-Coarse (Chemex)', value: 'medium-coarse' },
      { id: 4, title: 'Medium', value: 'medium' },
      { id: 5, title: 'Medium-Fine (Pour Over)', value: 'medium-fine' },
      { id: 6, title: 'Fine (Espresso)', value: 'fine' },
      { id: 7, title: 'Extra Fine (Turkish Coffee)', value: 'extra-fine' },
    ];
    const { container } = render(
      <ProductDropdown
        onSelected={onSelected}
        items={dropdownItems}
        placeholderText="TestDropdown"
      />
    );

    act(() => {
      screen.getByText('TestDropdown').click();
    });

    act(() => {
      fireEvent.click(screen.queryByText('Fine (Espresso)'));
    });

    expect(
      container.getElementsByClassName('dropdown-content dropdown-hidden')
        .length
    ).toBe(1);
  });

  it('closes the dropdown when clicked outside', () => {
    const onSelected = jest.fn();
    const dropdownItems = [
      { id: 1, title: 'Extra Coarse (Cold Brew)', value: 'extra-coarse' },
      { id: 2, title: 'Coarse (French Press)', value: 'coarse' },
      { id: 3, title: 'Medium-Coarse (Chemex)', value: 'medium-coarse' },
      { id: 4, title: 'Medium', value: 'medium' },
      { id: 5, title: 'Medium-Fine (Pour Over)', value: 'medium-fine' },
      { id: 6, title: 'Fine (Espresso)', value: 'fine' },
      { id: 7, title: 'Extra Fine (Turkish Coffee)', value: 'extra-fine' },
    ];
    const { container } = render(
      <ProductDropdown
        onSelected={onSelected}
        items={dropdownItems}
        placeholderText="TestDropdown"
      />
    );

    act(() => {
      screen.getByText('TestDropdown').click();
    });

    act(() => {
      fireEvent.click(document.body);
    });

    expect(
      container.getElementsByClassName('dropdown-content dropdown-hidden')
        .length
    ).toBe(1);
  });
});
