import PropTypes from 'prop-types';

import { StyledButton } from '@/components/Button/Button.style.js';

const Button = ({ type, text, disabled = false, ...props }) => {
  return (
    <StyledButton type={type} disabled={disabled} {...props}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  width: PropTypes.string,
};

export default Button;
