import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import './assets/css/index.css'
import AudioProvider from './providers/AudioProvider'
import AuthProvider from './providers/AuthProvider'
import Routes from './routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <AudioProvider>
        <RouterProvider router={Routes} />
      </AudioProvider>
    </AuthProvider>
    <Toaster />
  </React.StrictMode>
)
