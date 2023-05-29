const AudioComponent = ({ playerPacket }) => {
  const { audioPlayer, getCurrentDuration } = playerPacket
  return (
    <div className="">
      <audio
        src="/ben10.mp3"
        ref={audioPlayer}
        onDurationChange={getCurrentDuration}
      ></audio>
    </div>
  )
}

export default AudioComponent
