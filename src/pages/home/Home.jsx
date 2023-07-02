import AudioItem from '../../components/shared/audioItem/AudioItem'

const Home = () => {
  const audioItems = []

  for (let i = 0; i < 100; i++) {
    audioItems.push(<AudioItem key={i} />)
  }

  return <div className="grid lg:grid-cols-4 gap-2"> {audioItems} </div>
}

export default Home
