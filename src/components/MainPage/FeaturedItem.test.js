import { render, screen } from '@testing-library/react';
import React from 'react';
import FeaturedItem from './FeaturedItem';

describe('FeaturedItem', () => {
  it('should render', () => {
    render(<FeaturedItem />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render the image', () => {
    render(<FeaturedItem />);
    expect(screen.getByAltText('A coffee bag')).toBeInTheDocument();
  });
});
