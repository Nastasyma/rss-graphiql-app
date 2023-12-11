import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import SighUp from '../pages/SighUp/SighUp';
import Login from '../pages/Login/Login';
import Layout from '../pages/Layout/Layout';
import NotFound from '../pages/404/NotFound';
import Welcome from '../pages/Welcome/Welcome';

export const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'welcome',
        element: <Welcome />,
      },
      {
        path: 'register',
        element: <SighUp />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: '/graphiql-app' });

export default router;
