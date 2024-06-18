import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 40px;
  height: 40px;
`;

export const DropdownContainer = styled.ul`
  position: absolute;
  z-index: 1;

  min-width: 100px;

  background-color: lightgray;
`;

export const DropdownOption = styled.li`
  padding: 12px 16px;

  font-size: 14px;

  cursor: pointer;

  &:hover {
    background-color: var(--white-2);
  }
`;
