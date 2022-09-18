import React from 'react';
import styled from 'styled-components';

const AccordingButton = styled.button`
  width: 100%;
  border: 0;
  height: 3rem;
  background-color: #E5DCC5;
  display: flex;
  box-shadow: 0px 0px 1px 0px black;
  justify-content: center;
  align-items: center;
  font-weight: unset;

  &:hover {
    cursor: pointer;
  }
}`;

const AccordingButtonTitle = styled.h4`
  font-size: 2rem;
  color: #2d2d2a;
  font-weight: unset;
`;

interface AccordingBtnProps {
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonTitle: string;
}

const AccordingBtn = ({
  onClickHandler,
  buttonTitle,
}: AccordingBtnProps): JSX.Element => {
  return (
    <AccordingButton
      onClick={(event) => onClickHandler(event)}
      value={buttonTitle}
    >
      <AccordingButtonTitle>{buttonTitle}</AccordingButtonTitle>
    </AccordingButton>
  );
};

export default AccordingBtn;
