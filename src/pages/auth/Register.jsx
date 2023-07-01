import { Google } from 'react-bootstrap-icons'
import { toast } from 'react-hot-toast'
import { Parallax } from 'react-parallax'
import { Navigate } from 'react-router-dom'
import backgroundForLogin from '../../assets/backgrounds/2.webp'
import useAuth from '../../hooks/useAuth'
const Register = () => {
  const { signWithGoogle, user } = useAuth()
  if (user) {
    return <Navigate to={'/'} replace />
  }
  const handleGoogleProvider = () => {
    signWithGoogle()
      .then((res) =>
        toast.success('Welcome, Now you can enjoy all of our libraries.')
      )
      .catch((err) => toast.error(err.message))
  }
  return (
    <Parallax
      blur={{ min: -15, max: 20 }}
      bgImage={backgroundForLogin}
      strength={-200}
    >
      <div className="flex justify-center items-center py-20 px-3 h-screen">
        <div className="card flex-shrink-0 w-full max-w-lg bg-base-200 bg-opacity-75">
          <div className="card-body">
            <form>
              <h1 className="text-center text-3xl uppercase font-semibold border-b pb-2 mb-3">
                Login Now
              </h1>
              <div className="form-control mb-2">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered focus:outline-none bg-opacity-75"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered mb-2 focus:outline-none bg-opacity-75"
                />
                <label className="label label-text-alt link link-hover">
                  Forgot password?
                </label>
              </div>
              <div className="form-control mt-3">
                <button className="btn btn-primary font-semibold">Login</button>
              </div>
            </form>
            <div className="divider">OR</div>
            <button
              className="btn gap-2 btn-success font-semibold"
              onClick={handleGoogleProvider}
            >
              <Google size={24} /> Continue With Google
            </button>
          </div>
        </div>
      </div>
    </Parallax>
  )
}

export default Register
