import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccordingContent from '.';

test('Component --> AccordingContent', () => {
  render(<AccordingContent isVisibleText={true} paragraphy={'Test'} />);

  const accordingText = screen.getByText('Test');

  expect(accordingText).toBeInTheDocument();
});
