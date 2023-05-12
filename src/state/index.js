import { createSlice } from "@reduxjs/toolkit";
import { w3cwebsocket } from "websocket";

export const client = new w3cwebsocket(process.env.REACT_APP_WS);

const initialState = {
  mode: "dark",
  user: null,
  token: null,
};

export const authState = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authState.actions;
export default authState.reducer;
