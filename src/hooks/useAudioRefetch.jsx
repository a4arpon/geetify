import axios from 'axios'
import { useEffect, useState } from 'react'
import useAudio from './useAudio'

const useAudioRefetch = (error) => {
  const { audio } = useAudio()
  const [refreshedAudio, setRefreshedAudio] = useState(audio)
  useEffect(() => {
    if (audio?.refreshLink && error) {
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
        })
        .catch((err) => console.log(err))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audio?.refreshLink])
  if (error) {
    console.log('Path from', refreshedAudio)
    return refreshedAudio
  }
}

export default useAudioRefetch
