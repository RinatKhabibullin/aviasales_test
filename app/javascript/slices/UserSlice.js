import { clone } from 'ramda';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = clone(payload);
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
