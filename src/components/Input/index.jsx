import PropTypes from 'prop-types';

import {
  HelperText,
  HelperTextContainer,
  LabelContainer,
  StyledInput,
  StyledLabel,
} from '@/components/Input/Input.style.js';

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password']).isRequired,
  name: PropTypes.string,
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
  name,
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
        <StyledLabel htmlFor={id}>{required ? label + '*' : label}</StyledLabel>
      </LabelContainer>
      <StyledInput
        id={id}
        type={type}
        name={name}
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
