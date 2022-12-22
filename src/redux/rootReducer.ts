import { combineReducers } from 'redux';

import authSlice, { AuthState } from './slices/authSlice';
import keywordSlice, { KeywordListState } from './slices/keywordSlice';

export interface IAppState {
  auth: AuthState;
  keywordSlice: KeywordListState;
}
// state,action
export default combineReducers<IAppState | any>({
  auth: authSlice,
  keywordList: keywordSlice,
});
