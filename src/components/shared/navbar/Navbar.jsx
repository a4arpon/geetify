import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthProvider'

const Navbar = () => {
  const { user } = useContext(AuthContext)
  return (
    <div className="navbar bg-base-300 lg:p-3">
      <div className="flex-1">
        <Link to={'/'} className="normal-case text-4xl font-semibold">
          GeetiFy
        </Link>
      </div>
      <div className="flex-none gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-5 p-2 shadow menu gap-2 menu-compact dropdown-content bg-base-300 rounded-box w-52"
            >
              <li>
                <a className="hover:font-semibold">Profile</a>
              </li>
              <li>
                <a className="hover:font-semibold">Settings</a>
              </li>
              <li>
                <button className="hover:bg-error hover:text-black hover:font-semibold">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to={'/login'} className="btn btn-primary font-semibold text-lg">
            Login
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navbar
