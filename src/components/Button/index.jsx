import PropTypes from 'prop-types';

import { StyledButton } from '@/components/Button/Button.style.js';

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  width: PropTypes.string.isRequired,
};

function Button({ type, text, disabled = false, ...props }) {
  return (
    <StyledButton type={type} disabled={disabled} {...props}>
      {text}
    </StyledButton>
  );
}

export default Button;
