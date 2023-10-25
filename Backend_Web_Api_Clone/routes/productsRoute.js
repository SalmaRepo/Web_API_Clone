import {Router} from "express"

import { getProducts } from "../controllers/productsController.js";


const route=Router();

route.get("/",getProducts);



export default route;