import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },{
    path: "/1",
    element: <Page1/>
  },{
    path: "/2",
    element: <Page2/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
