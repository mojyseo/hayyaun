import React, { forwardRef } from 'react';
import styled from 'styled-components';

const SkillsSection = forwardRef((_, ref) => {
  return <Container ref={ref}></Container>;
});

export default SkillsSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  margin: 0 auto;
`;
