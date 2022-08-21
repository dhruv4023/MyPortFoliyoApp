import * as api from '../api'
import { setCurrentUser } from './currentUser';
export const chatData = (chatData) => async (dispatch) => {
    try {
        const { data } = await api.chatData(chatData);
        // console.log(chatData)
        // console.log(data)
        dispatch({ type: 'CHAT', data });
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        dispatch(getAllMess())
    } catch (error) {
        console.log(error)
        // console.log("error")
    }
}

export const sendMessage = (sendMess) => async (dispatch) => {
    try {
        // console.log("sendMess")
        
        const {  id, message, side } = sendMess;
        // console.log("sendMess2")
        // console.log( id, message, side)
        const { data } = await api.sendMess( id, message, side);
        // console.log("sendMess4")
        dispatch({ type: 'MESS', data });
        // console.log("sendMess5")
        dispatch(getAllMess())
        // console.log("sendMess6")
    } catch (error) {
        console.log(error)
        // console.log("error")
    }
}

export const getAllMess = () => async (dispatch) => {
    try {
        const { data } = await api.getAllMess()
        // console.log(data)
        dispatch({ type: 'FETCH_ALL_MESS', payload: data })
    } catch (error) {
        console.log(error)
        // console.log("error")
    }
}
