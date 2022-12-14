import { current } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit'
import elements from './data'

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
      state.editMode = true;
    },
    setSelectedEnterprise: (state, action) => {
      if (!state.editMode) {
        state.selectedEnterprise = action.payload;
      }
    },
    deleteEnterpriseSubmenu: (state) => {
      let elementBefore = undefined;
      let elementChildOf = undefined;

      const traverse = (id, enterprises) => {
        for (let index = 0; index < enterprises.length; index++) {
          const element = enterprises[index];
          if (element.id === id && !element.root) {
            if(elementBefore) {
              console.log(current(elementBefore))
              console.log(current(state.selectedEnterprise))
              state.selectedEnterprise = elementChildOf;
              if(elementChildOf) {
                elementChildOf.childs = elementChildOf.childs.filter((child) => child.id !== id);
              }
            }
            return;
          }
          elementBefore = element;
          if(element.childs.length > 0 && element.childs.find((child) => child.id === id)) {
            elementChildOf = elementBefore;
          }
          traverse(id, element.childs);
        }
      };
      traverse(state.selectedEnterprise.id, state.enterprises);
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
export const { addEnterprise, setSelectedEnterprise, setEditModeState, updateSelectedItemName, updateEnterprise, cancelEnterpriseUpdate, deleteEnterpriseSubmenu } = enterprise.actions;
export default enterprise.reducer;