import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledSubTitle = styled.p`
  margin: 15px 15px 15px 30px;

  font-size: 15px;
`;

export const StyledInput = styled.input`
  width: 540px;

  padding: 10px;
  margin: 20px;

  border: none;
  background-color: transparent;
`;

export const StyledTextarea = styled.textarea`
  width: 540px;
  height: 300px;

  padding: 10px;
  margin: 20px;

  border: none;
  background-color: transparent;
`;

export const HelperText = styled.p`
  margin-top: 10px;
  margin-left: 28px;

  color: red;
  font-size: 12px;
`;

export const StyledFileInput = styled.input`
  margin: 0 0 30px 30px;
`;

export const ButtonContainer = styled.div`
  align-items: center;

  width: 100%;
`;
