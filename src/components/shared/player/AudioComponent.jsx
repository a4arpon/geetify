const AudioComponent = ({ playerPacket }) => {
  const audio =
    'https://srv4.onlymp3.to/download?file=b2bd47b54bdffd2c89552e082673589b251003'
  // const audio = '/audio/BilleE.mp3'
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
