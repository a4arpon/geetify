import { useContext } from 'react'
import { audioContext } from '../providers/AudioProvider'

const useAudio = () => {
  const audio = useContext(audioContext)
  return audio
}

export default useAudio
