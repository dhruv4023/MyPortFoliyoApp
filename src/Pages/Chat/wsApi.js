import { w3cwebsocket } from "websocket";
export const socketConn = () => {
  const id = "dhruv4023";
  // console.log(`${process.env.REACT_APP_WS}/start/${id}`);
  return new w3cwebsocket(`${process.env.REACT_APP_WS}/start/${id}`);
};
export const closeSocketConn = () => {
  const id = "dhruv4023";
  return new w3cwebsocket(`${process.env.REACT_APP_WS}/end/${id}`);
};
