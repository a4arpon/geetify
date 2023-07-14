import H5AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import useAudio from '../../../hooks/useAudio'

const Player = () => {
  const { audio } = useAudio()
  const refetchMyUrl = (link) => {
    toast.dismiss()
    toast.loading('Please wait for few seconds. Our media is cooking now...')
    console.log(link)
  }
  return (
    <div className="bottom-0 fixed bg-base-300 glassEffect w-full p-3 grid lg:grid-cols-3 justify-between bg-opacity-50 items-center">
      <div className="hidden lg:flex lg:gap-2">
        <img src={audio?.thumbnail} alt="" className="h-20 w-20 rounded-md" />
        <div>
          <h1 className="text-lg font-bold link-hover overflow-hidden h-6">
            <Link to={'/'}>{audio?.title?.substring(0, 35)} ...</Link>
          </h1>
          <Link className="font-semibold link-hover">
            {audio?.author?.authorName || 'Not Provided'}
          </Link>
          <p>{audio?.visitorsCount} Times Played</p>
        </div>
      </div>
      <H5AudioPlayer
        // eslint-disable-next-line no-unused-vars
        onError={(err) => {
          console.log('err')
          refetchMyUrl(audio?.refreshLink)
        }}
        // eslint-disable-next-line no-unused-vars
        onEnded={(end) => {
          console.log('end')
        }}
        // eslint-disable-next-line no-unused-vars
        onLoadedMetaData={(stat) => toast.dismiss()}
        src={audio?.mediaUrl}
        volume={0.75}
      ></H5AudioPlayer>
    </div>
  )
}

export default Player
