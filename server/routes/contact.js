import express from 'express'

import {contactData} from '../controller/contact.js'
import {chatData,chatMess, getAllMessages} from '../controller/chatData.js'

const routes = express.Router();

routes.post("/contact",contactData)


routes.post("/chat",chatData)
routes.patch("/chatmess/:id",chatMess)
routes.get('/get', getAllMessages)
// routes.get('/contact', (req, res) => {
//     res.send("contact");
// })

export default routes