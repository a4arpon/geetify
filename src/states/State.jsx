import { configureStore } from '@reduxjs/toolkit'
import { audioSlice } from './AudioSlice'

const store = configureStore({
  reducer: {
    audio: audioSlice.reducer
  }
})
export default store
