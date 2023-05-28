import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/Navbar'
import Player from '../components/shared/player/Player'
import Sidebar from '../components/shared/sidebar/Sidebar'
import { AuthContext } from '../contexts/AuthProvider'
const MainLayout = () => {
  const { user } = useContext(AuthContext)
  return (
    <>
      <Navbar />
      {user ? (
        <div className="flex flex-col gap-3">
          <Sidebar />
          <Outlet />
        </div>
      ) : (
        <Outlet />
      )}
      <Player />
    </>
  )
}

export default MainLayout
