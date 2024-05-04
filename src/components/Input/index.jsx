import styled from 'styled-components';
import PropTypes from 'prop-types';

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password']).isRequired,
  value: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  helperText: PropTypes.string,
};

// Base Input Components
function Input({
  id,
  type,
  value,
  required,
  placeholder,
  onChange,
  label,
  helperText,
  ...props
}) {
  return (
    <>
      <LabelContainer>
        <StyledLabel htmlFor={id}>
          {/* example: 비밀번호* */}
          {required ? label + '*' : label}
        </StyledLabel>
      </LabelContainer>
      <StyledInput
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        {...props}
      />
      {!!helperText && (
        <HelperTextContainer>
          <HelperText>{helperText}</HelperText>
        </HelperTextContainer>
      )}
    </>
  );
}

export default Input;

const LabelContainer = styled.div`
  text-align: left;
  margin-bottom: 9px;
`;

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 6px;
`;

const StyledInput = styled.input`
  width: 100%;

  padding: 8px 12px;

  border: 1px solid black;
  border-radius: 4px;
  box-sizing: border-box; /* 요소의 크기를 패딩과 경계선을 포함하여 계산 */
  outline: none;
`;

const HelperTextContainer = styled.div`
  text-align: left;
  margin-top: 3px;
`;

const HelperText = styled.span`
  margin: 3px 0 0;

  color: red;
  font-size: 12px;
`;
