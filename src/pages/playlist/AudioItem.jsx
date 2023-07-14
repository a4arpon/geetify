import { PlayCircleFill } from 'react-bootstrap-icons'
import useAudio from '../../hooks/useAudio'

const AudioItem = ({ payload }) => {
  const { audio, setAudio } = useAudio()
  return (
    <div className="bg-base-100 p-3 lg:p-5 rounded-lg flex justify-between items-center flex-col lg:flex-row">
      <h1>{payload?.title}</h1>
      {audio !== payload && (
        <button
          className="btn btn-primary btn-sm mt-3"
          onClick={() => setAudio(payload)}
        >
          <PlayCircleFill size={23} /> Play This Item
        </button>
      )}
    </div>
  )
}

export default AudioItem
