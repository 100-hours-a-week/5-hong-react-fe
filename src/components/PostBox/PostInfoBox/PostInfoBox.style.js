import styled from 'styled-components';

export const PostTileContainer = styled.div`
  width: 100%;

  text-align: left;
`;

export const StyledTitle = styled.h2`
  font-weight: bold;
`;

export const PostDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  font-size: 15px;
`;

export const OwnerInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledButton = styled.button`
  width: 48px;
  height: 26px;

  border: 1px solid #aca0eb;
  border-radius: 5px;
  background-color: #f4f5f7;

  color: black;
  font-size: 13px;
  text-align: center;

  cursor: pointer;
`;
