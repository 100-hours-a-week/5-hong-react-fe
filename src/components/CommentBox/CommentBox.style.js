import styled from 'styled-components';

export const CommentInfoContainer = styled.li`
  display: flex;
  flex-direction: column;

  padding: 0 20px 20px;

  font-size: 15px;
  text-align: left;
`;

export const OwnerInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100px;
  min-height: 26px;
  margin-top: 30px;
  margin-left: auto;
`;

export const StyledButton = styled.button`
  width: 48px;
  height: 26px;

  border: 1px solid #aca0eb;
  border-radius: 5px;
  background-color: #f4f5f7;

  color: #000;
  font-size: 13px;
  text-align: center;

  cursor: pointer;
`;

export const CommentContents = styled.div`
  padding-left: 59px;
`;
