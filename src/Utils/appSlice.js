import { createSlice } from "@reduxjs/toolkit";

const initialSate = {
  screen: "home",
  modalVisible: false,
};

export const appSlice = createSlice({
  name: "data",
  initialState: initialSate,
  reducers: {
    setScreen(state, action) {
      state.screen = action.payload;
    },
    setModalVisible(state, action) {
      state.modalVisible = action.payload;
    },
  },
});

export const { setScreen, setModalVisible } = appSlice.actions;

export default appSlice.reducer;
