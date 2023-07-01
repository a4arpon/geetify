import { useEffect, useRef, useState } from 'react'
import {
  PauseCircleFill,
  PlayCircleFill,
  SkipBackwardCircleFill,
  SkipForwardCircleFill,
  VolumeUpFill
} from 'react-bootstrap-icons'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import AudioComponent from './AudioComponent'
import VolumeChanger from './VolumeChanger'

const Player = () => {
  const { user } = useAuth()
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
    if (user) {
      setIsPlaying(!isPlaying)
      if (isPlaying) {
        audioPlayer.current.pause()
      } else {
        audioPlayer.current.play()
      }
    } else {
      toast.error("You can't play any audio without login.")
    }
  }
  const getCurrentDuration = () => {
    const time = audioPlayer.current.currentTime
    setCurrentTime(parseFloat(time).toFixed(2))
  }

  const handleSeekBar = (eclipsedTime) => {
    audioPlayer.current.currentTime = eclipsedTime
    setCurrentTime(eclipsedTime)
  }
  const playerPacket = {
    audioPlayer,
    getCurrentDuration,
    setDuration,
  }
  return (
    <div className="bottom-0 fixed bg-base-300 w-full p-3 grid lg:grid-cols-4 justify-between bg-opacity-75 items-center">
      <div className="hidden lg:flex lg:gap-2">
        <img
          src="https://i.ytimg.com/vi/gj5QG8Jv8XQ/sddefault.jpg"
          alt=""
          className="h-20 w-20 rounded-md"
        />
        <div>
          <h1 className="text-lg font-bold">AURORA - Runaway Use HeadPhone</h1>
          <Link className="font-semibold link-hover">AURORA</Link>
          <p>203243 Times Played</p>
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-2 items-center">
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
          <span className="text-gray-400">{(currentTime / 60).toFixed(2)}</span>
          <input
            type="range"
            min="0"
            max={duration}
            onChange={(seekBar) => handleSeekBar(seekBar.target.value)}
            value={currentTime}
            className="range range-xs range-primary bg-base-100"
          />
          <span className="text-gray-400">{(duration / 60).toFixed(2)}</span>
          <AudioComponent playerPacket={playerPacket} />
        </div>
      </div>
      <div
        className="hidden lg:flex justify-end items-center gap-2"
        title={`Current Volume ${playerVolume}`}
      >
        <VolumeUpFill size={32} />
        <VolumeChanger volumeChange={setPlayerVolume} />
        <p className="text-gray-400">{playerVolume}</p>
      </div>
    </div>
  )
}

export default Player
