import axios from 'axios'
import { useEffect, useState } from 'react'
import AudioItem from '../../components/shared/audioItem/AudioItem'
const Home = () => {
  const [audios, setAudios] = useState(null)
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}audios/all`)
      .then((data) => data?.data)
      .then((res) => setAudios(res))

    return () => {
      setAudios(null)
    }
  }, [])

  return (
    <div className="grid lg:grid-cols-4 gap-2">
      {audios?.map((item) => (
        <AudioItem key={item?.thumbnail} item={item}/>
      ))}
    </div>
  )
}

export default Home
