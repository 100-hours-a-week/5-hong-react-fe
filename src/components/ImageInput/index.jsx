import PropTypes from 'prop-types';

import {
  CenterContainer,
  ChangeButton,
  HelperText,
  InputLabel,
  PreviewImage,
  ProfileImageContainer,
  StyledAddSign,
  StyledInput,
  StyledLabel,
} from '@/components/ImageInput/ImageInput.style.js';

ImageInput.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  image: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  showChangeButton: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  $brightness: PropTypes.string,
};

function ImageInput({
  id,
  type,
  onChange,
  image,
  label,
  helperText,
  width,
  height,
  showChangeButton = false,
  $brightness = '1',
  ...props
}) {
  return (
    <>
      <ProfileImageContainer>
        <InputLabel>{label}</InputLabel>
        <HelperText>{helperText}</HelperText>
      </ProfileImageContainer>
      <CenterContainer>
        <StyledLabel htmlFor={id} width={width} height={height}>
          {image ? (
            <PreviewImage src={image} alt='PREVIEW' $brightness={$brightness} />
          ) : (
            <StyledAddSign />
          )}
          {showChangeButton && <ChangeButton>변경</ChangeButton>}
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
