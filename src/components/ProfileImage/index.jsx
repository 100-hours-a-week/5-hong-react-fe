import PropTypes from 'prop-types';

import {
  StyledContainer,
  StyledImage,
} from '@/components/ProfileImage/ProfileImage.style.js';

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
