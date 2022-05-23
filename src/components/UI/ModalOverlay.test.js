import { render } from '@testing-library/react';
import React from 'react';
import ModalOverlay from './ModalOverlay';

describe('ModalOverlay', () => {
  it('should render the children', () => {
    const { getByText } = render(
      <ModalOverlay>
        <div>test</div>
      </ModalOverlay>
    );
    expect(getByText('test')).toBeTruthy();
  });
});
