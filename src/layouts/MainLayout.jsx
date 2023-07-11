import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/navbar/Navbar'
import Player from '../components/shared/player/Player'
import Sidebar from '../components/shared/sidebar/Sidebar'
const MainLayout = () => {
  return (
    <div className="bg-base-300">
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="p-2 pb-36 mt-16">
            <Outlet />
          </div>
        </div>
        <Sidebar />
      </div>
      <Player />
    </div>
  )
}

export default MainLayout
