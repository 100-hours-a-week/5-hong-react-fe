import styled from 'styled-components';

export const PostContainerBox = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 592px;

  padding-bottom: 10px;
  padding-top: 17px;

  border-radius: 16px;
  background-color: #fff;
  box-shadow: 3px 4px 4px 0 #cccccc40;

  cursor: pointer;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 544px;

  padding: 5px 0 20px;
`;

export const StyledTitle = styled.div`
  font-weight: bold;
  text-align: left;
  padding-bottom: 15px;
`;

export const OwnerInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;

  width: 544px;
  height: 52px;

  text-align: left;
  padding-top: 8px;

  h3 {
    font-size: 15px;
    font-weight: bold;
  }
`;

export const PostDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 14px;
`;

export const PostMetaContainer = styled.div`
  display: flex;
  gap: 3px;
`;
