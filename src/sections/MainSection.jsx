import React, { forwardRef } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { navigate } from 'gatsby';

const resumeUrl = 'https://www.linkedin.com/in/hayyaun';

const MainSection = forwardRef((_, ref) => {
  const onContactClick = (e) => navigate('#contact');
  const onResumeClick = (e) => window.open(resumeUrl, '_blank').focus();

  return (
    <Container ref={ref}>
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
            I Am Very Interested In Building Websites, Being A Developer Is One
            Of My Life Goals, With A Talent In This Field I Want To Always Learn
            New Things And Strengthen Every Process.
          </span>
        </DetailsBox>
        <ButtonsBox>
          <Button
            title="Contact Me"
            variant="filled"
            onClick={onContactClick}
          />
          <Button title="My Resume" variant="outline" onClick={onResumeClick} />
        </ButtonsBox>
      </ContentBox>
    </Container>
  );
});

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
  font-size: 6rem;
  line-height: 6.25rem;
  font-weight: 700;
  background: linear-gradient(285deg, #d525e3 15%, #4474e4 75%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeaderText = styled.span`
  font-size: 3rem;
  line-height: 3.5rem;
  font-weight: 700;
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
