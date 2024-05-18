import { createPortal } from 'react-dom';
import { createContext, useMemo, useState } from 'react';

import PropTypes from 'prop-types';

import Toast from '@/components/Toast';
import ToastList from '@/components/ToastList';

export const ToastContext = createContext(null);

ToastProvider.propTypes = {
  children: PropTypes.node,
};

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const data = useMemo(() => [toasts, setToasts], [toasts]);

  return (
    <ToastContext.Provider value={data}>
      {children}
      {createPortal(
        <ToastList>
          {toasts.map(({ message }, idx) => (
            <Toast key={idx}>{message}</Toast>
          ))}
        </ToastList>,
        document.querySelector('#portal'),
      )}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
