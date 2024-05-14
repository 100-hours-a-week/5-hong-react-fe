import { Outlet } from 'react-router-dom';

import S from '@/styles/common.jsx';
import Header from '@/components/Header';

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
