import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Objects from '../components/3d/Objects';
import Title from '../components/system/Title';

const AboutSection = forwardRef((_, ref) => {
  return (
    <Container ref={ref}>
      <Title>About Me</Title>
      <ContentBox>
        <AnimeBox>
          <Objects />
        </AnimeBox>
      </ContentBox>
    </Container>
  );
});

export default AboutSection;

const AnimeBox = styled.div`
  flex: 0 0 50%;
  height: 100%;
`;

const ContentBox = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;
  gap: 32px;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;
