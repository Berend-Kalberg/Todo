import { THEME_CHANGE } from './constants';

// Sets initial state
const initialState = {
  mode: 'light',
};

// Handles action of changing the theme
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_CHANGE:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
