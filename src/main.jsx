import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import './assets/css/index.css'
import AuthProvider from './contexts/AuthProvider'
import Routes from './routes/Routes'
import store from './states/State'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={Routes} />
      </AuthProvider>
    </Provider>
    <Toaster />
  </React.StrictMode>
)
