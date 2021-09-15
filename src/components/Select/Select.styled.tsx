import { Shadow } from 'constants/Shadow';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledLabel = styled.label`
  display: block;
`;

export const StyledSelect = styled.div`
  box-shadow: ${Shadow.StickyTab};
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: white;
`;

export const StyledOption = styled.div`
  padding: 4px 8px;
  cursor: pointer;
  &:hover {
    background-color: #dddbdb;
  }
`;

interface IStyledValue {
  isValue: boolean;
}

export const StyledValue = styled.button`
  border: 1px solid gray;
  cursor: pointer;
  text-align: left;
  display: block;
  width: 100%;
  padding: 4px 8px;
  border-radius: 4px;
  min-height: 34px;
  color: ${(props: IStyledValue) => props.isValue && '#999292'};
`;
