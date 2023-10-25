import {Router} from "express"

import { getTodos } from "../controllers/todosController.js";


const route=Router();

route.get("/",getTodos);



export default route;