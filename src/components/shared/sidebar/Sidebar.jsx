import { Download, Search } from 'react-bootstrap-icons'
import toast from 'react-hot-toast'
import useAudio from '../../../hooks/useAudio'

const Sidebar = () => {
  const { audio } = useAudio()
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="p-4 w-80 h-full glassEffect bg-base-200 bg-opacity-50 text-base-content mt-[70px] rounded-tr-lg">
        <li className="p-0 mb-2">
          <div className="w-full flex flex-col gap-3">
            <input
              type="text"
              name=""
              className="input focus:outline-none w-full"
              placeholder="Search Here..."
            />
            <button className="btn btn-neutral w-full">
              <Search size={18} /> Search
            </button>
          </div>
        </li>
        {audio?.thumbnail && (
          <li className="mt-10">
            <div className="bg-base-100 p-3 rounded-lg">
              <p>Now Playing...</p>
              <img
                src={audio?.thumbnail}
                alt=""
                className="h-16 w-16 rounded-full mx-auto my-2"
              />
              <h3>{audio?.title}</h3>
            </div>
          </li>
        )}
        <li className="p-0 mt-10">
          <button
            className="btn w-full btn-neutral"
            onClick={() => toast('We will implement this feature soon.')}
          >
            <Download size={18} />
            Install KLyric
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
