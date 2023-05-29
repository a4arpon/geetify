import useTitle from '../../../hooks/useTitle'
const AudioComponent = ({ playerPacket }) => {
  useTitle('Ben 10 Guitar Remix | GeetiFy')
  const audio =
    'https://ve33.aadika.xyz/download/V1Pl8CzNzCw/mp3/320/1685345397/ac7478073a9718f62e22797ca5d83d32d75ed6d0b869094d58e12ddeb80e6d0c/1?f=X2Download.app'
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
