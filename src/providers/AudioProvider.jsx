import { createContext, useState } from 'react'

export const audioContext = createContext(null)
const AudioProvider = ({ children }) => {
  const [audioLink, setAudioLink] = useState({})
  const audioPacket = { audioLink, setAudioLink }
  return (
    <audioContext.Provider value={audioPacket}>
      {children}
    </audioContext.Provider>
  )
}

export default AudioProvider
