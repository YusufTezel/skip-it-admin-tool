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

const elements = [{
  name: "Tryg - 70112020",
  id: "yaijdwquw-wdomdd",
  childs: [{
      name: "0 - Englesk",
      id: "qowfmpqwkd-wpkqdmoiqwmd",
      childs: [{
          id: "koqwfm-omdqopmd",
          name: "1 - Ny kunde",
          childs: []
      }, {
          id: "kwdm-kwmd",
          name: "2 - Sunhed",
          childs: [{
              id: "owpqwww-lsllsko",
              name: "1 - Gør brug",
              childs: []
          }]
      }]
  }],
}, {
  name: "Danske bank - 72304050",
  id: "6",
  childs: [{
      name: "1 - Pension",
      id: "7",
      childs: [{
          id: "8",
          name: "1 - Førtidspension",
          childs: []
      }, {
          id: "9",
          name: "2 - Opsparing",
          childs: [{
              id: "10",
              name: "1 - Formue",
              childs: []
          }]
      }]
  }]
}];

const initialState = {
  enterprises: elements,
  selectedEnterprise: elements[0],
}

export const enterprise = createSlice({
  name: 'enterprise',
  initialState,
  reducers: {
    addEnterprise: (state, action) => {
      state.enterprises.push(action.payload)
      state.selectedEnterprise = action.payload;
    },
    setSelectedEnterprise: (state, action) => {
      state.selectedEnterprise = action.payload;
      console.log(state.selectedEnterprise)
    }
  },
})

// Action creators are generated for each case reducer function
export const { addEnterprise, setSelectedEnterprise } = enterprise.actions
export default enterprise.reducer