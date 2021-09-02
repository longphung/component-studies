import React from 'react';
import { RouterConstants } from 'routers/RouterConstants';
import { StyledWrapper, StyledLink } from './Home.styled';

const Home = () => {
  return (
    <StyledWrapper className="flex">
      <StyledLink className="w-1/2" to={RouterConstants.select}>Select component</StyledLink>
      <StyledLink className="w-1/2" to={RouterConstants.calendar}>Calendar component</StyledLink>
    </StyledWrapper>
  );
};

export default Home;
