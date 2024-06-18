import PropTypes from 'prop-types';

import {
  HelperText,
  HelperTextContainer,
  LabelContainer,
  StyledInput,
  StyledLabel,
} from '@/components/Input/Input.style.js';

// Base Input Components
const Input = ({
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
}) => {
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
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  helperText: PropTypes.string,
};

export default Input;
