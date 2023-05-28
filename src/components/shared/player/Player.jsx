import { useContext } from 'react'
import {
  PlayCircleFill,
  SkipBackwardCircleFill,
  SkipForwardCircleFill
} from 'react-bootstrap-icons'
import { AuthContext } from '../../../contexts/AuthProvider'

const Player = () => {
  const { user } = useContext(AuthContext)
  const handlePlayAudio = () => {
    if (user) {
      console.log('Yes!, You can play.')
    } else {
      console.log("No, You can't play audio.")
    }
  }
  return (
    <div className="bottom-0 fixed bg-base-300 w-full p-3 flex   flex-col lg:flex-row justify-center">
      <div className="lg:w-1/2 w-full flex flex-col gap-2 items-center">
        <div className="flex gap-2">
          <button className="btn btn-circle">
            <SkipBackwardCircleFill size={48} />
          </button>
          <button className="btn btn-circle" onClick={handlePlayAudio}>
            <PlayCircleFill size={48} />
          </button>
          <button className="btn btn-circle">
            <SkipForwardCircleFill size={48} />
          </button>
        </div>
        <div className="flex gap-2 items-center w-full">
          <span className="text-gray-400">0:00</span>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue={40}
            className="range range-xs range-primary"
          />
          <span className="text-gray-400">3:59</span>
        </div>
      </div>
    </div>
  )
}

export default Player
