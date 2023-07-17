import axios from 'axios'
import { useEffect, useState } from 'react'
import { PlayCircleFill } from 'react-bootstrap-icons'
import { useParams } from 'react-router-dom'
import AudioItem from './AudioItem'

const Playlist = () => {
  const { ID } = useParams()
  const [audioList, setAudioList] = useState([])
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}audio/${ID}`)
      .then((res) => res.data)
      .then((res) => setAudioList(res))
  }, [ID])
  return (
    <div className="my-10 bg-base-200 p-2 lg:p-5 rounded-lg">
      <div className="flex flex-col lg:flex-row justify-between gap-3 border-b-2 pb-3 mb-3 lg:items-center">
        <div>
          <h1 className="text-xl mb-2">{audioList?.title}</h1>
          <p>List Creator: {audioList?.author?.authorName}</p>
          <p>Listeners: {audioList?.visitorsCount}</p>
        </div>
        <div className="flex flex-col gap-3 justify-between">
          <p>Episodes: {audioList?.audios?.length}</p>
          <button className="btn btn-sm btn-primary" disabled>
            <PlayCircleFill size={18} /> Play
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {audioList?.audios?.map((item, index) => (
          <AudioItem key={item?._id} payload={item} index={index}/>
        ))}
      </div>
    </div>
  )
}

export default Playlist
