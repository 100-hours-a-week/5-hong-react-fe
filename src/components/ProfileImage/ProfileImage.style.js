import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: ${({ width }) => (width ? width : '36px')};
  height: ${({ height }) => (height ? height : '36px')};

  border: 1px solid black;
  border-radius: 50%;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
