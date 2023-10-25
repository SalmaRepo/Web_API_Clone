import { carts } from "../models/cartsModel.js"

export const getCarts=(req,res)=>{
    res.json(carts)
}