import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { AllAction } from '../Action';

const initialState = { success: false, userDetails: {} };

export const AppReducer = handleActions(
  {
    [AllAction.successloginUser]: (state = initialState, action) => {
      return {
        ...action.payload,
        success: true,
      };
    },
    [AllAction.successSignupUser]: (state, { payload }) => ({
      ...state,
      userDetails: payload.userDetails,
    }),
  },
  initialState
);

export const RootReducer = combineReducers({
  appReducer: AppReducer,
  routing: routerReducer,
});
