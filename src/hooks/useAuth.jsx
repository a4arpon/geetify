import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'

const useAuth = () => {
  const authProvider = useContext(AuthContext)
  return authProvider
}

export default useAuth
