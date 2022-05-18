import { render, screen } from '@testing-library/react';
import React from 'react';
import HeaderImage from './HeaderImage';

describe('HeaderImage', () => {
  // it should render the paragraph
  it('should render the paragraph', () => {
    render(<HeaderImage />);
    expect(
      screen.getByText('Lorem ipsum dolor, sit amet', { exact: false })
    ).toBeInTheDocument();
  });

  it('should render the shop now button', () => {
    render(<HeaderImage />);
    expect(screen.getByText('Shop Now')).toBeInTheDocument();
  });
});
