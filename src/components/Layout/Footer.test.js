import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer', () => {
  it('should render the footer', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(
      screen.getByText('© 2021 Coffee Company. All rights reserved.')
    ).toBeInTheDocument();
  });
});
