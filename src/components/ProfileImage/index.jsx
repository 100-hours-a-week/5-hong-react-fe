import PropTypes from 'prop-types';

import {
  StyledContainer,
  StyledImage,
} from '@/components/ProfileImage/ProfileImage.style.js';

const ProfileImage = ({ width, height, ...props }) => {
  return (
    <StyledContainer width={width} height={height}>
      <StyledImage {...props} />
    </StyledContainer>
  );
};

ProfileImage.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ProfileImage;
