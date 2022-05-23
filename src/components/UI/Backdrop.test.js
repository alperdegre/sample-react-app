import { render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Backdrop from './Backdrop';

describe('Backdrop', () => {
  it('should render the backdrop', () => {
    const onClose = jest.fn();
    render(<Backdrop onClose={onClose} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should call onClose when the backdrop is clicked', () => {
    const onClose = jest.fn();
    render(<Backdrop onClose={onClose} />);

    act(() => {
      screen.getByRole('button').click();
    });

    expect(onClose).toHaveBeenCalled();
  });
});
