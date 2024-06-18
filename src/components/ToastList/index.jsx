import { StyledToastList } from '@/components/ToastList/ToastList.style.js';
import PropTypes from 'prop-types';

const ToastList = ({ children }) => {
  return <StyledToastList>{children}</StyledToastList>;
};

ToastList.propTypes = {
  children: PropTypes.node,
};

export default ToastList;
