import express from 'express'

import {postProjectLink,getProjectLink,deleteLink,editLink} from '../controller/project.js'

const routes = express.Router();

routes.post("/postlinks",postProjectLink)
routes.get("/getlinks",getProjectLink)
routes.delete("/deletelink/:id",deleteLink)
routes.patch("/editlink/:id",editLink)


export default routes