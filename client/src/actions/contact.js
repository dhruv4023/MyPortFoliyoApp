import * as api from '../api'
export const contact = (contactData) => async (dispatch) => {
    try {
        const { data } = await api.postDetails(contactData);
        dispatch({ type: 'CONTACT', data });
        dispatch(getContactList)
    } catch (error) {
        console.log(error)
    }
}

export const getContactList = (contactData) => async (dispatch) => {
    try {
        const { data } = await api.getContactDataList(contactData);
        // console.log(data)
        dispatch({ type: 'FETCH_ALL_CONTACT_DATA',  payload: data });
        // console.log(data)
    } catch (error) {
        console.log(error)
        console.log("error")
    }
}
