const Player = () => {
  return (
    <div className="bottom-0 fixed bg-base-300 w-full p-3 flex   flex-col lg:flex-row justify-center">
      <div className="lg:w-1/2 w-full flex gap-2 items-center">
        <span className="text-gray-400">0:00</span>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue={40}
          className="range range-xs range-primary"
        />
        <span className="text-gray-400">3:59</span>
      </div>
    </div>
  )
}

export default Player
