import { createSlice, current } from '@reduxjs/toolkit'
import data from './data'
import { v4 as uuidv4 } from 'uuid';
import { findAndDeleteFirst } from 'obj-traverse/lib/obj-traverse';

const initialState = {
  enterprises: data.enterprises,
  selectedEnterprise: data.enterprises.children[0],
  selectedEnterpriseDefaultvalues: null,
  inEditmode: false
};

export const enterprise = createSlice({
  name: 'enterprise',
  initialState,
  reducers: {
    addEnterprise: (state) => {
      let newItem = {
        id: uuidv4(),
        name: "*NEW ENTERPRISE",
        childs: []
      };
      state.enterprises.children.push(newItem);
      state.selectedEnterprise = newItem;
      state.inEditmode = true;
    },
    addSubmenu: (state) => {

    },
    setSelectedEnterprise: (state, action) => {
      if (!state.inEditmode) {
        state.selectedEnterprise = action.payload;
      }
    },
    deleteEnterpriseSubmenu: (state) => {
      for (let index = 0; index < state.enterprises.length; index++) {
        const element = state.enterprises[index];
        if(findAndDeleteFirst(element, 'children', {id: state.selectedEnterprise.id})) return;
      }
    },
    setEditModeState: (state, action) => {
      state.inEditmode = action.payload;
      if(state.inEditmode) {
        state.defaultValuesForEnterpriseInEditMode = state.selectedEnterprise;
      }
    },
    updateSelectedItemName: (state, action) => {
      state.selectedEnterprise.name = action.payload;
    },
    updateEnterprise: (state) => {

      const traverse = (id, enterprises) => {
        for (let index = 0; index < enterprises.length; index++) {
          const element = enterprises[index];
          if (element.id === id) {
            element.name = state.selectedEnterprise.name;
            return;
          }
          traverse(id, element.childs)
        }
      };

      traverse(state.selectedEnterprise.id, state.enterprises);
      state.inEditmode = false;
    },
    cancelEnterpriseUpdate: (state, action) => {
      if(state.defaultValuesForEnterpriseInEditMode) {
        state.selectedEnterprise = state.defaultValuesForEnterpriseInEditMode;
        state.defaultValuesForEnterpriseInEditMode = undefined;
      }
      state.inEditmode = false;
    }
  },
});

// Action creators are generated for each case reducer function
export const { addEnterprise, setSelectedEnterprise, setEditModeState, 
  updateSelectedItemName, updateEnterprise, cancelEnterpriseUpdate, 
  deleteEnterpriseSubmenu, addSubmenu } = enterprise.actions;
export default enterprise.reducer;