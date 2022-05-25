import { render, screen } from '@testing-library/react';
import React from 'react';
import AboutPage from './AboutPage';

describe('AboutPage', () => {
  it('should render the AboutImage', () => {
    render(<AboutPage />);
    expect(screen.getByText('ABOUT US')).toBeInTheDocument();
  });

  it('should render the first AboutBlock with its image', () => {
    render(<AboutPage />);
    expect(screen.getByText('OUR GOALS')).toBeInTheDocument();
    expect(screen.getByAltText('espresso machines')).toBeInTheDocument();
  });

  it('should render the second AboutBlock', () => {
    render(<AboutPage />);
    expect(screen.getByText('WHO WE ARE')).toBeInTheDocument();
    expect(
      screen.getByAltText(
        'a cup of coffee with a little note saying enjoy little things'
      )
    ).toBeInTheDocument();
  });

  it('should render the third AboutBlock', () => {
    render(<AboutPage />);
    expect(screen.getByText('OUR STORY')).toBeInTheDocument();
    expect(screen.getByAltText('a blue neon coffee sign')).toBeInTheDocument();
  });

  it('should render the Contact Us div', () => {
    render(<AboutPage />);
    expect(screen.getByText('CONTACT US')).toBeInTheDocument();
  });
});
