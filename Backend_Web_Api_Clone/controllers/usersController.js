import { users } from "../models/usersModel.js"

export const getUsers=(req,res)=>{
    res.json(users)
}