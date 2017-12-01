import { MENU_UPDATE_COLLAPSE } from './constants';

const initialState = {
  collapsed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MENU_UPDATE_COLLAPSE:
      return {
        ...state,
        collapsed: action.collapsed
      };

    default:
      return state;
  }
};
