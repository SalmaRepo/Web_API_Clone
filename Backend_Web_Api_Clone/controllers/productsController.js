import { products } from "../models/productsModel.js"

export const getProducts=(req,res)=>{
 res.json(products)
    
}