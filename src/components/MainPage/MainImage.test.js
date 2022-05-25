import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import MainImage from './MainImage';

describe('MainImage', () => {
  it('should render the paragraph', () => {
    render(
      <MemoryRouter>
        <MainImage />
      </MemoryRouter>
    );
    expect(
      screen.getByText('Lorem ipsum dolor, sit amet', { exact: false })
    ).toBeInTheDocument();
  });

  it('should render the shop now button', () => {
    render(
      <MemoryRouter>
        <MainImage />
      </MemoryRouter>
    );
    expect(screen.getByText('Shop Now')).toBeInTheDocument();
  });
});
