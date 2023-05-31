const VolumeChanger = ({ volumeChange }) => {
  return (
    <>
      <input
        type="range"
        max={100}
        min={0}
        defaultValue={85}
        step={5}
        className="range range-xs hover:range-accent w-28"
        onChange={(r) => volumeChange(r.currentTarget.value)}
      />
    </>
  )
}

export default VolumeChanger
