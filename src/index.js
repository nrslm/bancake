import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import ErrorPage from './pages/error/Eror_page'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './pages/main_page/Main'
import { MantineProvider, createTheme } from '@mantine/core'
import Info from "./pages/infoBancake/Info"
import Basket from './pages/basket/Basket'
import store from "./app/store"
import { Provider } from "react-redux"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:id",
    element: <Info />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Basket",
    element: <Basket />,
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <MantineProvider >
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </MantineProvider>
);
