import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Login from '../pages/auth/Login'
import Home from '../pages/home/Home'
import Playlist from '../pages/playlist/Playlist'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/playlist/:ID',
        element: <Playlist />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
])

export default Routes
