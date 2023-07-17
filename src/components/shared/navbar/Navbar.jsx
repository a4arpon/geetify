import { useContext } from 'react'
import { List } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  return (
    <div className="navbar fixed z-10 bg-base-200 bg-opacity-50 glassEffect lg:p-2">
      <div className="flex-1 flex justify-between">
        <div className="flex items-center gap-2">
          <label className="btn btn-ghost lg:hidden" htmlFor="my-drawer-2">
            <List size={28} />
          </label>
          <Link to={'/'} className="normal-case text-4xl font-semibold">
            KLyric
          </Link>
        </div>
      </div>
      <div className="flex-none">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-4 p-2 shadow menu gap-2 menu-compact dropdown-content bg-base-200 rounded-box w-52 bg-opacity-90"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button
                  className="hover:bg-error hover:text-black"
                  onClick={() => logOut()}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to={'/login'}
            className="btn btn-primary font-semibold text-base"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
