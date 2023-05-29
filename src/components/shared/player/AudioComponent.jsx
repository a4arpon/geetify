import useTitle from '../../../hooks/useTitle'
const AudioComponent = ({ playerPacket }) => {
  useTitle('Ben 10 Guitar Remix | GeetiFy')
  const audio = 'https://s12.gmpdn.com/get/3984754/Ad9J9w4XO9h2nb0pDYRZIqR51w51e4CQxMMmZNlp/mp3'
  const { audioPlayer, getCurrentDuration, setDuration } = playerPacket
  return (
    <audio
      src={audio}
      ref={audioPlayer}
      onTimeUpdate={getCurrentDuration}
      onLoadedData={(a) => {
        setDuration(a.currentTarget.duration.toFixed(2))
      }}
    ></audio>
  )
}

export default AudioComponent
