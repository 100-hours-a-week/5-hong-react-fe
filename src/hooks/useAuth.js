import { useContext } from 'react';

import { AuthContext } from '@/hooks/context/AuthProvider.jsx';

function useAuth() {
  const authContext = useContext(AuthContext);

  if (!authContext) throw new Error('AuthProvider 가 없음.');

  return { ...authContext };
}

export default useAuth;
