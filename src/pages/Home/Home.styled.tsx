import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Shadow } from 'constants/Shadow';

export const StyledWrapper = styled.div`
  width: 1180px;
  margin: 0 auto;
`;

export const StyledLink = styled(Link)`
  display: block;
  margin: 16px;
  text-decoration: none;
  box-shadow: ${Shadow.StickyTab};
  border-radius: 16px;
  padding: 32px 16px;
`;
