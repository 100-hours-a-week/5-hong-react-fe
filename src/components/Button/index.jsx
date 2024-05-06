import styled from 'styled-components';
import PropTypes from 'prop-types';

// TODO: 갈아엎기 -> 좀 더 유동적(?) 사용할 수 있도록 변경
// ...(background, margin)

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'summit']).isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  width: PropTypes.string.isRequired,
};

function Button({ type, text, disabled = false, onClick, width, ...props }) {
  return (
    <>
      <StyledButton
        type={type}
        disabled={disabled}
        onClick={onClick}
        width={width}
        {...props}>
        {text}
      </StyledButton>
    </>
  );
}

export default Button;

const StyledButton = styled.button`
  width: ${({ width }) => width};

  padding: 8px; /* 버튼 내부 여백 */

  border: none;
  border-radius: ${({ radius }) => (radius ? radius : '4px')}; /* 기본값 4px */

  color: white;

  cursor: pointer;
  margin-top: ${({ marginTop }) =>
    marginTop ? marginTop : '15px'}; /* 기본값 15px */

  margin-right: ${({ marginRight }) =>
    marginRight ? marginRight : '15px'}; /* 기본값 15px */

  &:disabled {
    background-color: var(--purple-1);
  }

  &:not(:disabled) {
    background-color: var(--purple-2);
  }
`;
