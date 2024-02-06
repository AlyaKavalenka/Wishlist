import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialValues {
  value: boolean;
}

const IsOpenModalSlice = createSlice({
  name: 'IsOpenModalSlice',
  initialState: <InitialValues>{
    value: false,
  },
  reducers: {
    isOpenModalValue: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { isOpenModalValue } = IsOpenModalSlice.actions;

export default IsOpenModalSlice.reducer;
