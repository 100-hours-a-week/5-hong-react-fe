import styled from 'styled-components';

export const StyledButton = styled.button`
  width: ${({ width }) => width};

  padding: 8px; /* 버튼 내부 여백 */
  margin: ${({ $margin }) => ($margin ? $margin : '0')};

  border: none;
  border-radius: ${({ $radius }) =>
    $radius ? $radius : '4px'}; /* 기본값 4px */

  color: white;

  cursor: pointer;

  &:disabled {
    background-color: var(--purple-1);
  }

  &:not(:disabled) {
    background-color: var(--purple-2);
  }
`;
