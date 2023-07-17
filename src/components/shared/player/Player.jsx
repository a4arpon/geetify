import H5AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import useAudio from '../../../hooks/useAudio'
import useAudioRefetch from '../../../hooks/useAudioRefetch'

const Player = () => {
  const { audio } = useAudio()
  const audioReFetcher = useAudioRefetch()
  const refetchMyUrl = () => {
    const currentTime = new Date()
    const refreshTime = new Date(audio?.refreshTime._seconds * 1000)

    const timeDifference = currentTime - refreshTime
    const hoursDifference = timeDifference / (1000 * 60 * 60)

    if (hoursDifference <= 23) {
      toast.dismiss()
      toast.loading(
        'Please wait for a few seconds. Your media is cooking on the server....'
      )
      console.log('Should I fetch?')
    } else {
      console.log(
        'Yes, I need to fetch',
        timeDifference,
        hoursDifference,
        refreshTime
      )
    }
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
          refetchMyUrl()
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
