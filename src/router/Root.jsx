import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';
import S from '@/styles/common.jsx';

function Root() {
  return (
    <>
      <Header />

      <S.StyledSection>
        <Outlet />
      </S.StyledSection>
      {/* FIXME: 스크롤 */}
      {/* FIXME: 모달 */}
      {/* FIXME: 토스트 */}
    </>
  );
}

export default Root;
