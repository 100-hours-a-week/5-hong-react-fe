import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';

function Root() {
  return (
    <>
      <>
        <Header />

        <Outlet />
      </>
      {/* FIXME: 스크롤 */}
      {/* FIXME: 모달 */}
      {/* FIXME: 토스트 */}
    </>
  );
}

export default Root;
