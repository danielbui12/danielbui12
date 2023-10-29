import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages'
import Blog from './pages/blog'
import Blogs from './pages/blogs'
import ErrorPage from './pages/error-page'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Tags from './pages/tags'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/blog",
    element: <Blogs />,
  },
  {
    path: "/blog/:code",
    element: <Blog />,
  },
  {
    path: "/tag",
    element: <Tags />,
  },
  {
    path: "/tag/:tag",
    element: <Blogs />,
  },
], 
  { basename: import.meta.env.BASE_URL }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
