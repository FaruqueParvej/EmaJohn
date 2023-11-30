import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Shop from './components/Shop'
import ReviewItem from './components/ReviewItem.jsx'
import ManageInventory from './components/ManageInventory.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login.jsx'
import cartLoader from './components/cartLoader.jsx'
import Checkout from './components/Checkout.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "order-review",
        element: <ReviewItem></ReviewItem>,
        loader:cartLoader,
      },
      {
        path: "manage-inventory",
        element: <ManageInventory></ManageInventory>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "checkout",
        element: <Checkout></Checkout>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
