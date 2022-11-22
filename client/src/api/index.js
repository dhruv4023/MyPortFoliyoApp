import axios from 'axios'

const API = axios.create({ baseURL: `${process.env.REACT_APP_SERVER}` })

// const API = axios.create({ baseURL: 'http://localhost:5500' })

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('Profile')) {
//         req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
//     }
//     return req;
// })

export const postDetails = (contactData) => API.post('/_contact/contact', contactData);
export const chatData = (chatData) => API.post('/_contact/chat', chatData);

// export const sendMess=(sendMess)=>API.patch(`/_contact/chat`,sendMess);
export const sendMess = ( id, message, side) => API.patch(`/_contact/chatmess/${id}`, {message, side});


export const getAllMess = () => API.get('/_contact/get');


export const getContactDataList = () => API.get('/_contactOwn/contact');

export const postProjectLink=(projectLinkData)=>API.post('/_projectlink/postlinks',projectLinkData)
export const getAllprojectLinks=()=>API.get('/_projectlink/getlinks')
export const deleteProject=(id)=>API.delete(`/_projectlink/deletelink/${id}`)
export const editProject=(id,Title, Link, Description )=>API.patch(`/_projectlink/editlink/${id}`,{Title, Link, Description })