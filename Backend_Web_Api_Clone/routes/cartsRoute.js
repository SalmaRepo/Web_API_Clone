import {Router} from "express"

import { getCarts } from "../controllers/cartsController.js";


const route=Router();


route.get("/",getCarts)


export default route;