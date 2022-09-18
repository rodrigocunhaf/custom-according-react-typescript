import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccordingBtn from '.';

const onClickHandler = jest.fn();

test('Component --> AccordingBtn', () => {
  render(
    <AccordingBtn buttonTitle="BUTTONTEST" onClickHandler={onClickHandler} />
  );

  const btn = screen.getByText('BUTTONTEST');

  fireEvent.click(btn);

  expect(onClickHandler).toBeCalledTimes(1);
  expect(btn).toBeInTheDocument();
});
