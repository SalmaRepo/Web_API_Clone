import {Router} from "express"


import { getPosts} from "../controllers/postsController.js";

const route=Router();

route.get("/",getPosts)


export default route;