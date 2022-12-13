import { createSlice, current } from '@reduxjs/toolkit'
import elements from './data'
import { } from 'react-redux'

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
};

const initialState = {
  enterprises: elements,
  selectedEnterprise: elements[0],
  defaultValuesForEnterpriseInEditMode: undefined,
  editMode: false
};

export const enterprise = createSlice({
  name: 'enterprise',
  initialState,
  reducers: {
    addEnterprise: (state, action) => {
      state.enterprises.push(action.payload);
      state.selectedEnterprise = action.payload;
    },
    setSelectedEnterprise: (state, action) => {
      if (!state.editMode) {
        state.selectedEnterprise = action.payload;
      }
    },
    setEditModeState: (state, action) => {
      state.editMode = action.payload;
      if(state.editMode) {
        state.defaultValuesForEnterpriseInEditMode = state.selectedEnterprise;
      }
    },
    updateSelectedItemName: (state, action) => {
      state.selectedEnterprise.name = action.payload;
    },
    updateEnterprise: (state) => {

      function traverse(id, enterprises) {

        for (let index = 0; index < enterprises.length; index++) {
          const element = enterprises[index];
          if (element.id === id) {
            element.name = state.selectedEnterprise.name;
            return;
          }
          traverse(id, element.childs)
        }
      }

      traverse(state.selectedEnterprise.id, state.enterprises);
      state.editMode = false;
    },
    cancelEnterpriseUpdate: (state) => {
      state.selectedEnterprise = state.defaultValuesForEnterpriseInEditMode;
      state.defaultValuesForEnterpriseInEditMode = undefined;
      state.editMode = false;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addEnterprise, setSelectedEnterprise, setEditModeState, updateSelectedItemName, updateEnterprise, cancelEnterpriseUpdate } = enterprise.actions;
export default enterprise.reducer;