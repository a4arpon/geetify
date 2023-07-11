import { createContext, useState } from 'react'

export const audioContext = createContext(null)
const AudioProvider = ({ children }) => {
  const [audio, setAudio] = useState({})
  const audioPacket = { audio, setAudio }
  return (
    <audioContext.Provider value={audioPacket}>
      {children}
    </audioContext.Provider>
  )
}

export default AudioProvider
