import Router from '@/router/Router.jsx';

import GlobalStyles from '@/styles/GlobalStyles.jsx';
import AuthProvider from '@/hooks/context/AuthProvider.jsx';

function App() {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Router />
    </AuthProvider>
  );
}

export default App;
