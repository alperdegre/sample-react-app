import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AboutImage from './AboutImage';

describe('AboutImage', () => {
  it('should render the title', () => {
    render(
      <MemoryRouter>
        <AboutImage />
      </MemoryRouter>
    );
    expect(screen.getByText('ABOUT US')).toBeInTheDocument();
  });

  it('should render the paragraph', () => {
    render(
      <MemoryRouter>
        <AboutImage />
      </MemoryRouter>
    );
    expect(
      screen.getByText('Maecenas iaculis a risus in viverra.', { exact: false })
    ).toBeInTheDocument();
  });
});
