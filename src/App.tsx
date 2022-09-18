import React from 'react';
import styled from 'styled-components';
import According, { AccordingInterface } from './components/According';
import content from './content/index.json';
import PageGlobalConfig from './global/page-global-config';

const accordings: AccordingInterface[] = content;

const ContentPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const App = (): JSX.Element => {
  return (
    <>
      <PageGlobalConfig />
      <ContentPage>
        <According accordings={accordings} />
      </ContentPage>
    </>
  );
};

export default App;
