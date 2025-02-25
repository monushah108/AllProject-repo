import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Search from './pages/search.jsx'
import Cart from './pages/cart.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element : <App />,
    children : [
      {
        path:'/',
        element:<Home />,
      },
      {
        path:'/search',
        element: <Search />
      },
      {
        path:'/cart',
        element: <Cart />
      },
      {
        path:'/detail/:cartId',
        element:<ProductDetail />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <RouterProvider router={router} />
  </Provider>
  


)
