import PropTypes from 'prop-types';
import { styled } from 'styled-components';

ToastList.propTypes = {
  children: PropTypes.node,
};

function ToastList({ children }) {
  return <StyledToastList>{children}</StyledToastList>;
}

export default ToastList;

export const StyledToastList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  position: fixed;
  top: 10px;
  right: 10px;

  padding: 0;
  margin: 0;
  list-style: none;
`;
