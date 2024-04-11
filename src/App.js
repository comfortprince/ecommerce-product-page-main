import './index.css'

import React from 'react'
import { 
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'

import routes from './pages'

const BASE_NAME = "ecommerce-product-page-main"

const router = createBrowserRouter(routes, {
  basename: `/${BASE_NAME}`
})

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
}

export default App;
