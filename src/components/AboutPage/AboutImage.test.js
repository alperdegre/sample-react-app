import { render, screen } from '@testing-library/react';
import React from 'react';
import AboutImage from './AboutImage';

describe('AboutImage', () => {
  it('should render the title', () => {
    render(<AboutImage />);
    expect(screen.getByText('ABOUT US')).toBeInTheDocument();
  });

  it('should render the paragraph', () => {
    render(<AboutImage />);
    expect(
      screen.getByText('Maecenas iaculis a risus in viverra.', { exact: false })
    ).toBeInTheDocument();
  });
});
