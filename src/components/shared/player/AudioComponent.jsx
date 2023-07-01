const AudioComponent = ({ playerPacket }) => {
  const audio = '/audio/BilleE.mp3'
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
