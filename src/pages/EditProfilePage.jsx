import styled from 'styled-components';

import S from '@/styles/common.jsx';
import ProfileForm from '@/components/ProfileForm';
import withAuth from '@/hoc/withAuth.jsx';

const ProfileFormWithAuth = withAuth(ProfileForm);

function EditProfilePage() {
  return (
    <StyledArticle>
      <StyledTitle>
        <S.Highlight>회원정보수정</S.Highlight>
      </StyledTitle>
      <ProfileFormWithAuth />
    </StyledArticle>
  );
}

export default EditProfilePage;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 392px;
  height: 90vh; /* 화면 전체 높이의 90%를 차지하도록 설정 */

  text-align: center;
`;

const StyledTitle = styled.h1`
  margin-bottom: 10px;
`;
