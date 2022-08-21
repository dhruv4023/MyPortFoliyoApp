const projectReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "POST_PROJECT_LINK":
      return { ...state, data: action?.data };
    case "FETCH_ALL_PROJECT_LINKS":
      return { ...state, data: action?.payload };
    default:
      return state;
  }
};

export default projectReducer;
