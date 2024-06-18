import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  height: auto;

  margin: 10px 0;
`;

export const StyledInputContainer = styled.div`
  text-align: left;
`;

export const StyledSubTitle = styled.p`
  display: block;

  font-size: 16px;
  text-align: left;
  margin-bottom: 6px;
`;

export const StyledButton = styled.button`
  margin: 7px 0 0;

  border: none;
  background-color: var(--white-1);
`;
