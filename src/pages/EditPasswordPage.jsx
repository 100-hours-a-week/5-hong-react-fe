import styled from 'styled-components';

import S from '@/styles/common.jsx';
import PasswordForm from '@/components/PasswordForm';

function EditPasswordPage() {
  return (
    <StyledArticle>
      <StyledTitle>
        <S.Highlight>비밀번호수정</S.Highlight>
      </StyledTitle>
      <PasswordForm />
    </StyledArticle>
  );
}

export default EditPasswordPage;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 392px;
  height: 90vh; /* 화면 전체 높이의 90%를 차지하도록 설정 */

  text-align: center;
`;

const StyledTitle = styled.h2`
  margin-bottom: 20px;
`;
