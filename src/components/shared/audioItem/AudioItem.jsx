import { ClockFill, Download, PlayCircleFill } from 'react-bootstrap-icons'

const AudioItem = ({item}) => {
  return (
    <div className="bg-base-200 w-full rounded-lg glassEffect bg-opacity-70">
      <img
        src={item?.thumbnail}
        alt=""
        className="rounded-t-lg"
      />
      <div className="p-5">
        <p className="audioCardHeading">Popular this month</p>
        <p>Powered By</p>
        <p>Uiverse</p>
        <div className="flex mt-5 justify-between gap-5">
          <button className="btn btn-primary btn-sm">
            <PlayCircleFill size={18} /> Play
          </button>
          <div className="flex gap-2">
            <button className="btn btn-neutral btn-sm">
              <ClockFill size={18} />
            </button>
            <button className="btn btn-neutral btn-sm">
              <Download size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioItem
