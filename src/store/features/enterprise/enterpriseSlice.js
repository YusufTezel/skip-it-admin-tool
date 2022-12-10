import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  enterprises: ["hello"],
}

export const enterprise = createSlice({
  name: 'enterprise',
  initialState,
  reducers: {
    addEnterprise: (state, action) => {
      state.enterprises.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addEnterprise } = enterprise.actions

export default enterprise.reducer