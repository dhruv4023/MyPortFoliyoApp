import express from 'express'

import {allContactData} from '../controller/contactOwn.js'

const routes = express.Router();

routes.get("/contact",allContactData)


export default routes