import axios from 'axios'
import { useEffect, useState } from 'react'
import useAudio from './useAudio'

const useAudioRefetch = () => {
  const { audio } = useAudio()
  const [refreshedAudio, setRefreshedAudio] = useState(audio)
  useEffect(() => {
    if (audio?.refreshLink && audio?.isError) {
      console.log('fetching...')
      axios
        .post('https://geetify-web-sr.a4arpon.repl.co/audioRefresh', {
          refreshLink: audio?.refreshLink,
        })
        .then((res) => res.data)
        .then((res) => {
          const mediaPacket = {
            _id: audio?.parentID,
            audioID: audio?._id,
            mediaUrl: res?.download_url,
          }
          setRefreshedAudio({ ...audio, mediaUrl: mediaPacket?.mediaUrl })
          console.log(refreshedAudio)
        })
        .catch((err) => console.log(err))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audio?.refreshLink])
  if (audio?.isError && audio?.mediaUrl !== refreshedAudio?.mediaUrl) {
    console.log('Path from', refreshedAudio)
    return refreshedAudio
  }
}

export default useAudioRefetch
