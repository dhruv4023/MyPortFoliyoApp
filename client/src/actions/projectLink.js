import * as api from "../api";

export const postProjectLink = (projectLinkData) => async (dispatch) => {
  try {
    const { data } = await api.postProjectLink(projectLinkData);
    dispatch({ type: "POST_PROJECT_LINK", payload: data });
    dispatch(getAllprojectLinks());
  } catch (error) {
    console.log(error);
  }
};

export const getAllprojectLinks = () => async (dispatch) => {
  try {
    const { data } = await api.getAllprojectLinks();
    // console.log(data)
    dispatch({ type: "FETCH_ALL_PROJECT_LINKS", payload: data });
  } catch (error) {
    console.log(error);
    // console.log("error")
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    await api.deleteProject(id);
    dispatch(getAllprojectLinks());
  } catch (error) {
    console.log(error);
  }
};

export const editLink = (commentData) => async (dispatch) => {
  try {
    const { id, Title, Link, Description } = commentData;
    // console.log( id, Title, Link, Description)
    const { data } = await api.editProject(id, Title, Link, Description);
    dispatch({ type: "POST_PROJECT_LINK", payload: data });
    dispatch(getAllprojectLinks());
  } catch (error) {
    console.log(error);
  }
};
