import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import PropTypes from 'prop-types';

import { getUserInfo } from '@/apis/user.js';

const initialValue = {
  userInfo: null,
  isLoading: true,
  reload: async () => {},
};

export const AuthContext = createContext(initialValue);

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserInfo = async () => {
    setIsLoading(true);
    await getUserInfo()
      .then((response) => setUserInfo(response))
      .catch(() => setUserInfo(null));
    setIsLoading(false);
  };

  useEffect(() => {
    (async () => await fetchUserInfo())();
  }, []);

  const reload = useCallback(async () => {
    await fetchUserInfo();
  }, []);

  const value = useMemo(
    () => ({ userInfo, isLoading, reload }),
    [userInfo, isLoading, reload],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
