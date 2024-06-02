import { Navigate } from 'react-router-dom';

import PATH from '@/constants/path.js';
import useAuth from '@/hooks/useAuth.js';

const withAuth = (WrappedComponent) => {
  return function WithAuthComponent(props) {
    const { userInfo, isLoading } = useAuth();

    if (isLoading) return <div>로딩중...</div>;

    return userInfo ? (
      <WrappedComponent {...props} />
    ) : (
      <Navigate to={PATH.LOGIN} />
    );
  };
};

export default withAuth;
