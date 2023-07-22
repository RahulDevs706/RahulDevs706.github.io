import { configureStore } from '@reduxjs/toolkit'
import appSlice from './slice/appSlice'

export default configureStore({
  reducer: {main:appSlice},
})