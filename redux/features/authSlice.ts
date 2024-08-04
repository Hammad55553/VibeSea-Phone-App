// features/auth/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  forgotPasswordEmail: string;
}

const initialState: AuthState = {
    forgotPasswordEmail: "",
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateForgotPasswordEmail: (state, action: PayloadAction<string>) => {
      state.forgotPasswordEmail = action.payload;
    },
  },
});

export const { updateForgotPasswordEmail } = authSlice.actions;
export default authSlice.reducer;
