import { createSlice } from "@reduxjs/toolkit";

const initialSate = {
  screen: "home",
  modalVisible: false,
};

export const homeSlice = createSlice({
  name: "home",
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

export const { setScreen, setModalVisible } = homeSlice.actions;

export default homeSlice.reducer;
