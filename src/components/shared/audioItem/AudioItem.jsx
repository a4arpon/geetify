import { ClockFill, Download, PlayCircleFill } from 'react-bootstrap-icons'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'

const AudioItem = ({ item }) => {
  return (
    <div className="bg-base-200 w-full rounded-lg glassEffect bg-opacity-70">
      <img src={item?.thumbnail} alt="" className="rounded-t-lg w-full h-72" />
      <div className="p-5">
        <p className="audioCardHeading mb-2 truncate font-bold">
          {item?.title}
        </p>
        <Link to={`/author/${item?.author?.authorName}`}>
          {item?.author?.authorName}
        </Link>
        <p>{item?.visitorsCount}</p>
        <div className="flex mt-5 justify-between gap-5">
          <Link
            className="btn btn-primary btn-sm"
            to={`/playlist/${item?._id}`}
          >
            <PlayCircleFill size={18} /> Play List
          </Link>
          <div className="flex gap-2">
            <button
              className="btn btn-neutral btn-sm"
              onClick={() => toast.error('We will work on this feature soon.')}
            >
              <ClockFill size={18} />
            </button>
            <button
              className="btn btn-neutral btn-sm"
              onClick={() => toast.error('We will work on this feature soon.')}
            >
              <Download size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioItem
