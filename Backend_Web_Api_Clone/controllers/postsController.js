import { posts } from "../models/postsModel.js"

export const getPosts=(req,res)=>{
    res.json(posts)
}