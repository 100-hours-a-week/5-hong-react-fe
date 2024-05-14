import styled from 'styled-components';
import PropTypes from 'prop-types';

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

  margin: 10px 0;
`;

const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: ${({ width }) => (width ? width : '149px')};
  height: ${({ height }) => (height ? height : '149px')};

  margin: ${({ $margin }) => ($margin ? $margin : '0')};

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

  filter: brightness(${({ $brightness }) => $brightness});
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

const ChangeButton = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;

  padding: 4px 7px;

  border: 2px solid white;
  border-radius: 10px;

  color: white;
  font-size: 16px;
  font-weight: 400;
  text-align: center;

  transform: translate(-50%, -50%); /* 요소를 수평 및 수직으로 가운데 정렬 */
`;
