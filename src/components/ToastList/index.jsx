import PropTypes from 'prop-types';

import { StyledToastList } from '@/components/ToastList/ToastList.style.js';

ToastList.propTypes = {
  children: PropTypes.node,
};

function ToastList({ children }) {
  return <StyledToastList>{children}</StyledToastList>;
}

export default ToastList;
