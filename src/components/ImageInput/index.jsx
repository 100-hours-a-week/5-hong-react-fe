import styled from 'styled-components';
import PropTypes from 'prop-types';

ImageInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  image: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
};

function ImageInput({
  id,
  type,
  onChange,
  image,
  label,
  helperText,
  ...props
}) {
  return (
    <>
      <ProfileImageContainer>
        <InputLabel>{label}</InputLabel>
        <HelperText>{helperText}</HelperText>
      </ProfileImageContainer>
      <CenterContainer>
        <StyledLabel htmlFor={id}>
          {image ? (
            <PreviewImage src={image} alt='PREVIEW' />
          ) : (
            <StyledAddSign />
          )}
        </StyledLabel>
        <StyledInput
          type={type}
          id={id}
          accept='image/*'
          onChange={onChange}
          {...props}
        />
      </CenterContainer>
    </>
  );
}

export default ImageInput;

const ProfileImageContainer = styled.div`
  text-align: left;
  margin-bottom: 9px;
`;

const InputLabel = styled.div`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 6px;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10px 0 25px;
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 149px;
  height: 149px;

  border: none;
  border-radius: 50%;
  background-color: lightgray;

  cursor: pointer;
  overflow: hidden;
`;

const StyledInput = styled.input`
  display: none;
`;

const PreviewImage = styled.img`
  position: absolute;

  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledAddSign = styled.span`
  display: flex;
  align-items: center;

  width: 30px;
  height: 30px;

  &::before,
  &::after {
    position: absolute;

    width: 30px;
    height: 5px;

    background-color: black;
    content: '';
  }

  &::before {
    transform: rotate(90deg);
  }
`;

const HelperText = styled.span`
  margin: 3px 0 0;

  color: red;
  font-size: 12px;
`;
