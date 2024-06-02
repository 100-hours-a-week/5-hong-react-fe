import { useContext } from 'react';

import { ToastContext } from '@/hooks/context/ToastProvider.jsx';

function useToast() {
  const toastContext = useContext(ToastContext);

  if (!toastContext) throw new Error('ToastProvider 가 없음.');

  const [toasts, setToasts] = toastContext;

  return (toast) => {
    setToasts([...toasts, toast]);
  };
}

export default useToast;
