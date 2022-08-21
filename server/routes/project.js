import express from 'express'

import {postProjectLink,getProjectLink} from '../controller/project.js'

const routes = express.Router();

routes.post("/postlinks",postProjectLink)
routes.get("/getlinks",getProjectLink)


export default routes