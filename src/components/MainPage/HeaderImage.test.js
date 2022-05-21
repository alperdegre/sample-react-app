import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import HeaderImage from './HeaderImage';

describe('HeaderImage', () => {
  // it should render the paragraph
  it('should render the paragraph', () => {
    render(
      <MemoryRouter>
        <HeaderImage />
      </MemoryRouter>
    );
    expect(
      screen.getByText('Lorem ipsum dolor, sit amet', { exact: false })
    ).toBeInTheDocument();
  });

  it('should render the shop now button', () => {
    render(
      <MemoryRouter>
        <HeaderImage />
      </MemoryRouter>
    );
    expect(screen.getByText('Shop Now')).toBeInTheDocument();
  });
});
