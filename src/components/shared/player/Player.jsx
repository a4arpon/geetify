import { useContext, useEffect, useRef, useState } from 'react'
import {
  PauseCircleFill,
  PlayCircleFill,
  SkipBackwardCircleFill,
  SkipForwardCircleFill
} from 'react-bootstrap-icons'
import { AuthContext } from '../../../contexts/AuthProvider'
import AudioComponent from './AudioComponent'

const Player = () => {
  const { user } = useContext(AuthContext)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [playerVolume, setPlayerVolume] = useState(85)
  const [duration, setDuration] = useState(0)
  const audioPlayer = useRef()
  useEffect(() => {
    audioPlayer.current.volume = playerVolume / 100
  }, [playerVolume])
  useEffect(() => {
    if (duration === currentTime) {
      setIsPlaying(false)
    }
  }, [duration, currentTime])

  const handlePlayAudio = () => {
    if (!user) {
      setIsPlaying(!isPlaying)
      if (isPlaying) {
        audioPlayer.current.pause()
      } else {
        audioPlayer.current.play()
      }
      console.log('Yes!, You can play.')
    } else {
      console.log("No!, You can't play audio.")
    }
  }
  const getCurrentDuration = () => {
    const time = audioPlayer.current.currentTime
    setCurrentTime(parseFloat(time).toFixed(2))
  }
  const playerPacket = {
    audioPlayer,
    getCurrentDuration,
  }
  return (
    <div className="bottom-0 fixed bg-base-300 w-full p-3 flex   flex-col lg:flex-row justify-center">
      <div className="lg:w-1/2 w-full flex flex-col gap-2 items-center">
        <div className="flex gap-2">
          <button className="btn btn-circle">
            <SkipBackwardCircleFill size={48} />
          </button>
          {isPlaying ? (
            <button className="btn btn-circle" onClick={handlePlayAudio}>
              <PauseCircleFill size={48} />
            </button>
          ) : (
            <button className="btn btn-circle" onClick={handlePlayAudio}>
              <PlayCircleFill size={48} />
            </button>
          )}

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
            defaultValue={currentTime}
            className="range range-xs range-primary bg-base-100"
          />
          <span className="text-gray-400">3:59</span>
          <AudioComponent playerPacket={playerPacket} />
        </div>
      </div>
    </div>
  )
}

export default Player
