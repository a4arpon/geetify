import { useDispatch } from 'react-redux'
import { audioActions } from '../../states/AudioSlice'

const Home = () => {
  const dispatch = useDispatch()
  const { setAudio } = audioActions
  const tryState = () => {
    dispatch(setAudio('Hi'))
  }
  return (
    <div className="py-20">
      <h1>Hello World</h1>
      <button onClick={tryState}>Fuck Me</button>
    </div>
  )
}

export default Home
