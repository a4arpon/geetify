import { useContext } from 'react'
import { Download } from 'react-bootstrap-icons'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthProvider'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const downLoadOurApp = () => {
    toast.error('Currently we working on this feature.')
  }
  return (
    <div className="navbar flex justify-between bg-base-300 lg:p-3 fixed z-10 bg-opacity-75 gap-2">
      <div className="w-full flex justify-between">
        <div>
          <Link to={'/'} className="normal-case text-4xl font-semibold">
            GeetiFy
          </Link>
        </div>
        <div className="flex gap-2 text-sm">
          <button
            className="flex items-center gap-1 rounded-2xl bg-black py-2 px-3 font-semibold"
            onClick={downLoadOurApp}
          >
            <Download size={18} />
            Install App
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
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
                <button
                  className="hover:bg-error hover:text-black hover:font-semibold"
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
