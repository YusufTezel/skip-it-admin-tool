import { configureStore } from '@reduxjs/toolkit'
import enterpriseReducer from './features/enterprise/enterpriseSlice'

export const store = configureStore({
  reducer: {
    enterprise: enterpriseReducer
  },
})