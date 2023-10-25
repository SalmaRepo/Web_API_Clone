import { comments } from "../models/commentsModel.js"

export const getComments=(req,res)=>{
    res.json(comments)
}