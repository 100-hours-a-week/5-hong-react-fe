import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  StyledToast,
  StyledToastWrapper,
} from '@/components/Toast/Toast.style.js';

const Toast = ({ children }) => {
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(false);
    }, 3000);

    return () => clearTimeout(timer); // clean up
  }, []);

  return isShown ? (
    <StyledToastWrapper>
      <StyledToast>{children}</StyledToast>
    </StyledToastWrapper>
  ) : null;
};

Toast.propTypes = {
  children: PropTypes.node,
};

export default Toast;
