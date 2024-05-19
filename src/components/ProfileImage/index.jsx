import PropTypes from 'prop-types';
import styled from 'styled-components';

ProfileImage.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

function ProfileImage({ width, height, ...props }) {
  return (
    <StyledContainer width={width} height={height}>
      <StyledImage {...props} />
    </StyledContainer>
  );
}

export default ProfileImage;

const StyledContainer = styled.div`
  width: ${({ width }) => (width ? width : '36px')};
  height: ${({ height }) => (height ? height : '36px')};

  border: 1px solid black;
  border-radius: 50%;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
