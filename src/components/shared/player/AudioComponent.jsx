import useTitle from '../../../hooks/useTitle'
const AudioComponent = ({ playerPacket }) => {
  useTitle('Ben 10 Guitar Remix | GeetiFy')
  // https://dl50.yt2mp3.icu/m4a/QX8vJ8GQ5jg::91daa8dbcf57eb24fb21cb53b147b70c::1685433637::5be693b4::d
  // https://ve122.aadika.xyz/download/KeXrYNrMB_g/mp3/128/1685437791/0952386f8374b71659d211cb3567814dee1e72c79f72419c763f350f642e4843/1?f=yt5s.io
  const audio = '/audio/runway.mp3'
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
