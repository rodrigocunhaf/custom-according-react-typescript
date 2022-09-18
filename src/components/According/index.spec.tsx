import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import According, { AccordingInterface } from '.';
import mock from './mock/index.json';

const mockedAccordings: AccordingInterface[] = mock;

test('Component --> According', () => {
  render(<According accordings={mockedAccordings} />);

  const boxOne = screen.getByText('TEST1');
  const boxTwo = screen.getByText('TEST2');
  const boxTree = screen.getByText('TEST3');
  const boxFour = screen.getByText('TEST4');

  fireEvent.click(boxOne);

  expect(boxOne).toBeInTheDocument();
  expect(boxTwo).toBeInTheDocument();
  expect(boxTree).toBeInTheDocument();
  expect(boxFour).toBeInTheDocument();
});
