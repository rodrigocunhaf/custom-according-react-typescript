import React from 'react';
import styled from 'styled-components';

interface AccordingTextContentProps {
  isVisibleText: boolean;
}
const AccordingTextContent = styled.div<AccordingTextContentProps>`
  max-height: 1px;
  ${(props) => props.isVisibleText && 'max-height:500px'};
  transition-duration: 500ms;
  overflow: hidden;
  position: relative;
`;

const AccordingTextParagraphy = styled.p`
  padding: 1rem;
  display: flex;
`;

interface AccordingContentProps {
  isVisibleText: boolean;
  paragraphy: string;
}

const AccordingContent = ({
  isVisibleText,
  paragraphy,
}: AccordingContentProps): JSX.Element => {
  return (
    <AccordingTextContent isVisibleText={isVisibleText}>
      <AccordingTextParagraphy>{paragraphy}</AccordingTextParagraphy>
    </AccordingTextContent>
  );
};

export default AccordingContent;
