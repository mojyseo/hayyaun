import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Navbar from '../components/Navbar';

const MainSection = () => {
  return (
    <Container>
      <Navbar />
      <ContentBox>
        <HeaderBox>
          <HeaderText>Hi, I'm</HeaderText>
          <br />
          <HighlightText>Hayyaun</HighlightText>
          <br />
          <HeaderText>I'm a web developer</HeaderText>
        </HeaderBox>
        <DetailsBox>
          <span>
            I Am Very Interested In The Creative Field, Being A Designer Is One
            Of My Life Goals, With A Talent In This Field I Want To Always Learn
            New Things And Strengthen Every Process.
          </span>
        </DetailsBox>
        <ButtonsBox>
          <Button title="Contact Me" variant="filled" />
          <Button title="My Resume" variant="outline" />
        </ButtonsBox>
      </ContentBox>
    </Container>
  );
};

export default MainSection;

const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
`;

const DetailsBox = styled.div`
  max-width: 50%;
  line-height: 28px;
`;

const HighlightText = styled.span`
  font-size: 80px;
  font-weight: 700;
  line-height: 112px;
  background: linear-gradient(285deg, #d525e3 15%, #4474e4 75%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeaderText = styled.span`
  font-size: 48px;
  font-weight: 700;
  line-height: 85px;
`;

const HeaderBox = styled.div`
  font-family: 'Bungee Inline';
`;

const ContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 32px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  margin: 0 auto;
`;
