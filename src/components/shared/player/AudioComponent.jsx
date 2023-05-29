import useTitle from '../../../hooks/useTitle'
const AudioComponent = ({ playerPacket }) => {
  const { audioPlayer, getCurrentDuration, setDuration } = playerPacket
  useTitle('Ben 10 Guitar Remix | GeetiFy')
  return (
    <audio
      src="/audio/runway.mp3"
      ref={audioPlayer}
      onDurationChange={getCurrentDuration}
      onLoadedData={(a) => {
        setDuration(a.currentTarget.duration.toFixed(2))
      }}
    ></audio>
  )
}

export default AudioComponent
