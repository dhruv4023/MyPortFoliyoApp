const chatDataReducer = (states = { data: null }, actions) => {
  switch (actions.type) {
    case "CHAT":
      localStorage.setItem("Profile", JSON.stringify({ ...actions?.data }));
      return { ...states, data: actions?.data };
    case "MESS":
      return { ...states };
    case "FETCH_ALL_MESS":
    //   console.log(actions.payload);
      return { ...states, data: actions.payload };
    default:
      return states;
  }
};
export default chatDataReducer;
