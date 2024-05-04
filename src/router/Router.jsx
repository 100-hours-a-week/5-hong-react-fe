import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PATH from '@/constants/path.js';
import Root from '@/router/Root.jsx';
import LoginPage from '@/pages/LoginPage.jsx';

function Router() {
  const router = createBrowserRouter([
    {
      path: PATH.ROOT,
      element: <Root />,
      children: [{ path: PATH.LOGIN, element: <LoginPage /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
