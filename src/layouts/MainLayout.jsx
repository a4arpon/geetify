import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/navbar/Navbar'
import Player from '../components/shared/player/Player'
import Sidebar from '../components/shared/sidebar/Sidebar'
const MainLayout = () => {
  return (
    <div
      className="max-w-[1800px] mx-auto bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'})` }}
    >
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar />
          <div className="p-2 lg:p-5">
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
