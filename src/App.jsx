import Router from '@/router/Router.jsx';

import GlobalStyles from '@/styles/GlobalStyles.jsx';
import AuthProvider from '@/hooks/context/AuthProvider.jsx';
import ToastProvider from '@/hooks/context/ToastProvider.jsx';

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <GlobalStyles />
        <Router />
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
