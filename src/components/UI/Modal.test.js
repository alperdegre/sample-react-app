import { render } from '@testing-library/react';
import React from 'react';
import Modal from './Modal';

describe('Modal', () => {
  it('should render the children with modal', () => {
    const onClose = jest.fn();

    const { getByText } = render(
      <Modal onClose={onClose}>
        <div>test</div>
      </Modal>
    );

    expect(getByText('test')).toBeTruthy();
  });
});
