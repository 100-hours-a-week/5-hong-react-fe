import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PATH from '@/constants/path.js';
import Root from '@/router/Root.jsx';
import LoginPage from '@/pages/LoginPage.jsx';
import SignUpPage from '@/pages/SignUpPage.jsx';
import MainPage from '@/pages/MainPage.jsx';
import PostPage from '@/pages/PostPage.jsx';

function Router() {
  const router = createBrowserRouter([
    {
      path: PATH.ROOT,
      element: <Root />,
      children: [
        { path: PATH.LOGIN, element: <LoginPage /> },
        { path: PATH.SIGN_UP, element: <SignUpPage /> },
        { path: PATH.MAIN, element: <MainPage /> },
        { path: PATH.POSTS, element: <PostPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
