const contactReducer = (states = { data: null }, actions) => {
  switch (actions.type) {
    case "FETCH_ALL_CONTACT_DATA":
      return { ...states, data: actions?.payload };
    case "CONTACT":
      return { ...states, data: actions?.data };
    default:
      return states;
  }
};
export default contactReducer;
