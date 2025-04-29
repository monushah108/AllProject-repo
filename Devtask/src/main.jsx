import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingScreen from './pages/LandingScreen.jsx'
import Singup from './pages/Singup.jsx'
import Login from './pages/LoginPage.jsx'
import Profile from './pages/Profile.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element : <App />,
    children : [
      {
        path:'/',
        element:<LandingScreen />,
      },
      {
        path:'/singup',
        element:<Singup />,
      },
      {
        path:'/login',
        element:<Login />,
      },
      {
        path:'/profile',
        element:<Profile />,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />

)