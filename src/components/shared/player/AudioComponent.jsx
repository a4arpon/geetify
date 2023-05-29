const AudioComponent = ({ playerPacket }) => {
  const { audioPlayer, getCurrentDuration } = playerPacket
  return (
    <div className="">
      <audio
        src="/audio.mp3"
        ref={audioPlayer}
        onDurationChange={getCurrentDuration}
      ></audio>
    </div>
  )
}

export default AudioComponent
