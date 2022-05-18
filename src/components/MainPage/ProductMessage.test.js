import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import ProductMessage from './ProductMessage';

describe('ProductMessage', () => {
  it('should render the product message', () => {
    render(<ProductMessage />);
    expect(
      screen.getByText('Our company uses coffee beans roasted to perfection.')
    ).toBeInTheDocument();
  });

  it('should check if the image loads properly', () => {
    render(<ProductMessage />);
    const image = screen.getByAltText(
      'espresso with a flower shaped decoration'
    );
    fireEvent.load(image);
    expect(image).toBeInTheDocument();
  });
});
