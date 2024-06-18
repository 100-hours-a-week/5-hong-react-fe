import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 10vh; /* 화면 전체 높이의 10%를 차지하도록 설정 */
  max-height: 10vh;
  border-bottom: 1px solid #000;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 500px;
`;

export const StyledTitleText = styled.h1`
  font-weight: bold;
  text-align: center;

  cursor: pointer;
`;
