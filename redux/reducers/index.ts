// reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import authReducer from '../features/authSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
