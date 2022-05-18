import { render, screen } from '@testing-library/react';
import React from 'react';
import Socials from './Socials';

describe('FeaturedProducts', () => {
  it('should render the social buttons', () => {
    render(<Socials />);
    expect(screen.getAllByRole('link')).toHaveLength(4);
  });
});
