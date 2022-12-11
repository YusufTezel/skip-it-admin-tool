import { createSlice } from '@reduxjs/toolkit'

let ex = {
  id: "9fe8046e-7947-11ed-a1eb-0242ac120002",
  name: "Tryg",
  telephone: "70112020",
  image: "http://something.sk",
  buisnessArea: "insurance",
  childs: [{
    id: 1,
    clickNumer: 0,
    parentId: "9fe8046e-7947-11ed-a1eb-0242ac120002",
    headerText: "English",
    explanatoryText: "If you want to process in english",
    waitDurationBeforeNavigationInSec: 2,
    legalWarningText: undefined,
    input: {
      canTakeInput: true,
      value: ""
    },
    icon: "http://www.lang.dk"
  }]
}

const initialState = {
  enterprises: [ex],
  selectedEnterprise: undefined,
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