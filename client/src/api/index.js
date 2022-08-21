import axios from 'axios'

const API = axios.create({ baseURL: `${process.env.REACT_APP_SERVER}` })

// const API = axios.create({ baseURL: 'http://localhost:5500' })

// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('Profile')) {
//         req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
//     }
//     return req;
// })

export const postDetails = (contactData) => API.post('/contact/contact', contactData);
export const chatData = (chatData) => API.post('/contact/chat', chatData);

// export const sendMess=(sendMess)=>API.patch(`/contact/chat`,sendMess);
export const sendMess = ( id, message, side) => API.patch(`/contact/chatmess/${id}`, {message, side});


export const getAllMess = () => API.get('/contact/get');


export const getContactDataList = () => API.get('/contactOwn/contact');

export const postProjectLink=(projectLinkData)=>API.post('/projectlink/postlinks',projectLinkData)
export const getAllprojectLinks=()=>API.get('/projectlink/getlinks')