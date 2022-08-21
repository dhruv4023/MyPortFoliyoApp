import * as api from '../api'


export const postProjectLink = (projectLinkData) => async (dispatch) => {
    try {
        const { data } = await api.postProjectLink(projectLinkData);
        dispatch({ type: "POST_PROJECT_LINK", payload: data });
        dispatch(getAllprojectLinks())
    } catch (error) {
        console.log(error);
    }
}

export const getAllprojectLinks = () => async (dispatch) => {
    try {
        const { data } = await api.getAllprojectLinks()
        // console.log(data)
        dispatch({ type: 'FETCH_ALL_PROJECT_LINKS', payload: data })
    } catch (error) {
        console.log(error)
        console.log("error")
    }
}

// export const deleteComment = (id) => async (dispatch) => {
//     try {
//         // console.log(id)
//         await api.deleteComment(id)
//         dispatch(getAllprojectLinks())
//     } catch (error) {
//         console.log(error)
//     }
// }
