import { render, screen } from '@testing-library/react';
import React from 'react';
import AboutBlock from './AboutBlock';

describe('AboutBlock', () => {
  it('should render the children', () => {
    render(
      <AboutBlock
        image="test"
        alt="test_alt"
        orientation="left"
        backgroundColor="#000"
        textColor="#fff"
      >
        TEST
      </AboutBlock>
    );
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  it('should render the image with correct alt_text', () => {
    render(
      <AboutBlock
        image="test"
        alt="test_alt"
        orientation="left"
        backgroundColor="#000"
        textColor="#fff"
      >
        TEST
      </AboutBlock>
    );
    expect(screen.getByAltText('test_alt')).toBeInTheDocument();
  });

  it('should align the text and the container left when orientation is passed left', () => {
    const { container } = render(
      <AboutBlock
        image="test"
        alt="test_alt"
        orientation="left"
        backgroundColor="#000"
        textColor="#fff"
      >
        TEST
      </AboutBlock>
    );
    expect(container.firstChild.firstChild).toHaveStyle('flex-direction: row');
    expect(container.firstChild.firstChild.lastChild).toHaveStyle(
      'text-align: start'
    );
  });

  it('should align the text and the container right when orientation is passed right', () => {
    const { container } = render(
      <AboutBlock
        image="test"
        alt="test_alt"
        orientation="right"
        backgroundColor="#000"
        textColor="#fff"
      >
        TEST
      </AboutBlock>
    );
    expect(container.firstChild.firstChild).toHaveStyle(
      'flex-direction: row-reverse'
    );
    expect(container.firstChild.firstChild.lastChild).toHaveStyle(
      'text-align: end'
    );
  });

  it('should set backgroundColor and textColor correctly', () => {
    const { container } = render(
      <AboutBlock
        image="test"
        alt="test_alt"
        orientation="right"
        backgroundColor="#000"
        textColor="#fff"
      >
        TEST
      </AboutBlock>
    );
    expect(container.firstChild).toHaveStyle('background-color: #000');
    expect(container.firstChild).toHaveStyle('color: #fff');
  });
});
