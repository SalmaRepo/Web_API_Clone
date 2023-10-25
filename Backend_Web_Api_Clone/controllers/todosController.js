import { todos } from "../models/todosModel.js"

export const getTodos=(req,res)=>{
    res.json(todos)
}