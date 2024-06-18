import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 169px;

  border-radius: 8px;
  background-color: white;
`;

export const StyledTextarea = styled.textarea`
  width: 490px;
  margin-top: 25px;

  height: 95px;

  border: none;
  outline: none;
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;

  padding: 10px 0;
`;
