import React, { useState } from 'react';
import styled from 'styled-components';
import accordingArrow from '../../../assets/icons/according-arrow.png';

const AccordingButton = styled.button`
  width: 100%;
  border: 0;
  height: 3rem;
  background-color: #E5DCC5;
  display: flex;
  box-shadow: 0px 0px 1px 0px black;
  justify-content: space-between;
  align-items: center;
  font-weight: unset;
  padding: 0 2rem 0 2rem;

  &:hover {
    cursor: pointer;
  }
}`;

const AccordingButtonTitle = styled.h4`
  font-size: 2rem;
  color: #2d2d2a;
  font-weight: unset;
`;

interface AccordingArrowBoxProps {
  toUp: boolean;
}

const AccordingArrowBox = styled.div<AccordingArrowBoxProps>`
  width: 2rem;
  transform: rotateZ(${(props) => (props.toUp ? -91 : 89)}deg);
  transition-duration: 200ms;
`;

const AccordingArrow = styled.img`
  max-width: 100%;
`;
interface AccordingBtnProps {
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonTitle: string;
}

const AccordingBtn = ({
  onClickHandler,
  buttonTitle,
}: AccordingBtnProps): JSX.Element => {
  const [toUp, setToUp] = useState<boolean>(false);

  const changeStateButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    onClickHandler(event);
    setToUp(!toUp);
  };

  return (
    <AccordingButton onClick={changeStateButton} value={buttonTitle}>
      <AccordingButtonTitle>{buttonTitle}</AccordingButtonTitle>
      <AccordingArrowBox toUp={toUp}>
        <AccordingArrow src={accordingArrow} alt="according arrow" />
      </AccordingArrowBox>
    </AccordingButton>
  );
};

export default AccordingBtn;
