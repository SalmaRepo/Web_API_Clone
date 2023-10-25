import {Router} from "express"


import { getComments } from "../controllers/commentsController.js";

const route=Router();

route.get("/",getComments)


export default route;