import styled from 'styled-components';

export const LabelContainer = styled.div`
  text-align: left;
  margin-bottom: 9px;
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 6px;
`;

export const StyledInput = styled.input`
  width: 100%;

  padding: 8px 12px;

  border: 1px solid black;
  border-radius: 4px;
  box-sizing: border-box; /* 요소의 크기를 패딩과 경계선을 포함하여 계산 */
  outline: none;
`;

export const HelperTextContainer = styled.div`
  text-align: left;
  margin-top: 3px;
`;

export const HelperText = styled.span`
  margin: 3px 0 0;

  color: red;
  font-size: 12px;
`;
