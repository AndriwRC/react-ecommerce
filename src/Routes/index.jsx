import { Navigate, useRoutes } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext } from '../Context';
import Home from '../Pages/Home';
import MyAccount from '../Pages/MyAccount';
import MyOrder from '../Pages/MyOrder';
import MyOrders from '../Pages/MyOrders';
import SignIn from '../Pages/SignIn';
import NotFound from '../Pages/NotFound';

function Routes() {
  const { signOut } = useContext(ShoppingCartContext);

  const appRoutes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/all', element: <Home /> },
    {
      path: '/:category',
      element: signOut ? <Navigate replace to={'/sign-in'} /> : <Home />,
    },
    {
      path: '/my-account',
      element: signOut ? <Navigate replace to={'/sign-in'} /> : <MyAccount />,
    },
    {
      path: '/my-order',
      element: signOut ? <Navigate replace to={'/sign-in'} /> : <MyOrder />,
    },
    {
      path: '/my-orders',
      element: signOut ? <Navigate replace to={'/sign-in'} /> : <MyOrders />,
    },
    {
      path: '/my-orders/last',
      element: signOut ? <Navigate replace to={'/sign-in'} /> : <MyOrder />,
    },
    {
      path: '/my-orders/:id',
      element: signOut ? <Navigate replace to={'/sign-in'} /> : <MyOrder />,
    },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ]);
  return appRoutes;
}

export default Routes;
