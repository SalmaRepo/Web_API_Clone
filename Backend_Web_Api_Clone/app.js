import express from "express"
import morgan from "morgan";
import cors from "cors"

import productsRoute from "./routes/productsRoute.js"
import commentsRoute from "./routes/commentsRoute.js"
import cartsRoute from "./routes/cartsRoute.js"
import todosRoute from "./routes/todosRoute.js"
import postsRoute from "./routes/postsRoute.js"
import usersRoute from "./routes/usersRoute.js"
import { products } from "./models/productsModel.js";

const app=express();
app.use(express.json())

app.use(morgan("tiny"))

app.use(cors({origin:"http://localhost:5173"}))

const PORT=4005;
const prodcutType="smartphones"

app.use("/products",productsRoute)
app.use("/comments",commentsRoute)
app.use("/carts",cartsRoute)
app.use("/todos",todosRoute)
app.use("/posts",postsRoute)
app.use("/users",usersRoute)
app.get("/products/:id",(req,res)=>{



     if(Number(req.params.id)>=0){
        res.json(products.products[req.params.id-1])
    } else if(req.params.id==="categories"){
        let allCats=products.products.map(product=>product.category);
        let cats=allCats.filter((cat,index)=>allCats.indexOf(cat)===index)
        console.log(cats)
        res.json(cats)
    }
    
    
})

app.get("/products/categories",(req,res)=>{
    
  res.json(products)
})



app.listen(PORT,()=>console.log("server started"))