import styled from 'styled-components';

import SignUpForm from '@/components/SignUpForm';

function SignUpPage() {
  return (
    <StyledSection>
      <StyledSignUpArticle>
        <StyledText>회원가입</StyledText>
        <SignUpForm />
      </StyledSignUpArticle>
    </StyledSection>
  );
}

export default SignUpPage;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledSignUpArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 392px;
  height: 90vh; /* 화면 전체 높이의 90%를 차지하도록 설정 */

  text-align: center;
`;

const StyledText = styled.h1`
  flex-direction: column;
  justify-content: center;

  font-weight: bold;
`;
