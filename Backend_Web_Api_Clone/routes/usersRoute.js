import {Router} from "express"


import { getUsers } from "../controllers/usersController.js";

const route=Router();

route.get("/",getUsers)


export default route;