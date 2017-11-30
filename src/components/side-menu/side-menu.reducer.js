import {
  MENU_UPDATE_SELECTION,
  MENU_UPDATE_COLLAPSE } from './constants';

const initialState = {
  collapsed: false,
  selected: 'home',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MENU_UPDATE_COLLAPSE:
      return {
        ...state,
        collapsed: action.collapsed
      };

    case MENU_UPDATE_SELECTION:
      return {
        ...state,
        selected: action.selected
      };

    default:
      return state;
  }
};
