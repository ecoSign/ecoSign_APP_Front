import { combineReducers } from 'redux';

import authSlice, { AuthState } from './slices/authSlice';

export interface IAppState {
  auth: AuthState;
}
// state,action
export default combineReducers<IAppState | any>({
  auth: authSlice,
});
