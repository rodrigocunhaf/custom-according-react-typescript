import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AccordingBtn from './AccordingBtn';
import AccordingContent from './AccordingContent';
import AccordingList from './AccordingList';
import AccordingListItem from './AccordingListItem';
import _ from 'lodash';

const AccordingContainer = styled.div`
  max-width: 500px;
  box-shadow: 0px 0px 9px 0px black;
`;

export interface AccordingInterface {
  title: string;
  paragraphy: string;
}

interface VisibleAccording {
  isVisible: boolean;
}

type AccordingListInterface = Array<AccordingInterface & VisibleAccording>;

const generateAccordingList = (
  accordings: AccordingInterface[]
): AccordingListInterface => {
  const accordingList: AccordingListInterface = accordings.map((element) => {
    return { ...element, isVisible: false };
  });
  return accordingList;
};

interface AccordingProps {
  accordings: AccordingInterface[];
}

const According = ({ accordings }: AccordingProps): JSX.Element => {
  const [accordingsElements, setAccordingsElements] =
    useState<AccordingListInterface>([]);

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const newAccordingList = _.clone(accordingsElements);

    const searchedAccording = _.find(
      newAccordingList,
      (element) => element.title === event.currentTarget.value
    );

    if (searchedAccording != null) {
      searchedAccording.isVisible = !searchedAccording.isVisible;
      setAccordingsElements(newAccordingList);
    }
  };

  useEffect(() => {
    const generatedList: AccordingListInterface =
      generateAccordingList(accordings);
    setAccordingsElements(generatedList);
  }, []);
  return (
    <AccordingList>
      {_.map(accordingsElements, (according, index) => {
        return (
          <AccordingListItem key={`${according.title}__${index}`}>
            <AccordingContainer>
              <AccordingBtn
                buttonTitle={according.title}
                onClickHandler={onClickHandler}
              />
              <AccordingContent
                isVisibleText={according.isVisible}
                paragraphy={according.paragraphy}
              />
            </AccordingContainer>
          </AccordingListItem>
        );
      })}
    </AccordingList>
  );
};

export default According;
