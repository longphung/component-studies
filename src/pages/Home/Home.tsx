import React from 'react';
import { RouterConstants } from 'routers/RouterConstants';
import { StyledWrapper, StyledLink } from './Home.styled';

const Home = () => {
  return (
    <StyledWrapper>
      <StyledLink className="w-16" to={RouterConstants.select}>Select component</StyledLink>
      <StyledLink to={RouterConstants.calendar}>Calendar component</StyledLink>
    </StyledWrapper>
  );
};

export default Home;
