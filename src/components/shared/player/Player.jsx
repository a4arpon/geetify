import H5AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { Link } from 'react-router-dom'
import useAudio from '../../../hooks/useAudio'

const Player = () => {
  const { audio } = useAudio()


  return (
    <div className="bottom-0 fixed bg-base-300 glassEffect w-full p-3 grid lg:grid-cols-3 justify-between bg-opacity-50 items-center">
      <div className="hidden lg:flex lg:gap-2">
        <img src={audio?.thumbnail} alt="" className="h-20 w-20 rounded-md" />
        <div>
          <h1 className="text-lg font-bold link-hover overflow-hidden h-6">
            <Link to={'/'}>{audio?.audio?.title?.substring(0, 35)} ...</Link>
          </h1>
          <Link className="font-semibold link-hover">
            {audio?.author?.authorName || 'Not Provided'}
          </Link>
          <p>{audio?.visitorsCount} Times Played</p>
        </div>
      </div>
      <H5AudioPlayer src={audio?.audio?.url}></H5AudioPlayer>
    </div>
  )
}

export default Player
