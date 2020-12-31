import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
  },
  reducers: {
    //以下是可透過 useDispatch() 來呼叫的函式
    // 例如  onClick={() => useDispatch(openSendMessage())}
    selectMail: (state, action) => {
      state.selectedMail = action.payload
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const {
  selectMail,
  openSendMessage,
  closeSendMessage
} = mailSlice.actions;
export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
