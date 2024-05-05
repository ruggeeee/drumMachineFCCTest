import { combineReducers } from 'redux';

function displayReducer(state = '', action) {
  switch (action.type) {
    case 'UPDATE_DISPLAY':
      return action.text;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  display: displayReducer
});

export default rootReducer;
