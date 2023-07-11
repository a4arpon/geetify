import { useEffect, useState } from 'react'
import useAudio from '../../../hooks/useAudio'

const AudioComponent = ({ playerPacket }) => {
  const [audioLink, setAudioLink] = useState(null)
  const audio = useAudio()
  useEffect(() => {
    setAudioLink(
      'https://ve59.aadika.xyz/download/8gV0LMFn3DE/mp3/128/1689015164/c847bf5946f91fb25e153ed9c02a52e1935bccf97fba73f9ad5bf714ab0a40bf/1?f=SaveTube.io'
    )
  }, [])
  console.log(audio)
  const { audioPlayer, getCurrentDuration, setDuration } = playerPacket
  return (
    <audio
      src={audioLink}
      ref={audioPlayer}
      onTimeUpdate={getCurrentDuration}
      onLoadedData={(a) => {
        setDuration(a.currentTarget.duration.toFixed(2))
      }}
    ></audio>
  )
}

export default AudioComponent
/*
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
*/
