import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './components/Products/Products';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartLoaderProducts from './LoaderProducts/CartProductLoader';
import Checkout from './components/Checkout/Checkout';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './components/providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />
      },
      {
        path: "/order",
        element: <Order />,
        loader: cartLoaderProducts
      },
      {
        path: "/checkout",
        element: <PrivateRoute><Checkout /></PrivateRoute>
      },
      {
        path: "/inventory",
        element: <Inventory />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <SignUp />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router = {router} />
  </AuthProvider>,
)
