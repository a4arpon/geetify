import { createSlice } from '@reduxjs/toolkit'

const audioSlice = createSlice({
  name: 'currentAudio',
  initialState: {},
  reducers: {
    setAudio (state, action) {
      state.url = action.payload
    },
    reset (state, action) {
      state = {}
    }
  }
})
const audioActions = audioSlice.actions
export { audioActions, audioSlice }
