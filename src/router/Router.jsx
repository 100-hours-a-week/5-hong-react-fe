import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import PATH from '@/constants/path.js';
import Root from '@/router/Root.jsx';
import LoginPage from '@/pages/LoginPage.jsx';
import SignUpPage from '@/pages/SignUpPage.jsx';
import MainPage from '@/pages/MainPage.jsx';
import PostPage from '@/pages/PostPage.jsx';
import MakePostPage from '@/pages/MakePostPage.jsx';
import EditPostPage from '@/pages/EditPostPage.jsx';
import EditPasswordPage from '@/pages/EditPasswordPage.jsx';

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
        { path: PATH.MAKE_POSTS, element: <MakePostPage /> },
        { path: PATH.EDIT_POSTS, element: <EditPostPage /> },
        { path: PATH.EDIT_PASSWORD, element: <EditPasswordPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
