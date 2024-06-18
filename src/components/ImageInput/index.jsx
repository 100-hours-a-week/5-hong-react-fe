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

const ImageInput = ({
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
}) => {
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
};

ImageInput.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  image: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  showChangeButton: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  $brightness: PropTypes.string,
};

export default ImageInput;
