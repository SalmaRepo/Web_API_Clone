import { useEffect, useState ,useCallback} from 'react'
import { Link, Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Products from './Products'

function App() {
  const [products, setProducts] = useState([])

  const [productHomeDisp,setProductHomeDisp]=useState(null)
/* 
  const [productTitle,setProductTitle]=useState("")

  const [productPrice,setProductPrice]=useState("") */
  
  

  useEffect(() => {
      fetch("http://localhost:4005/products")
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])

  console.log(products)
  

  const shuffle = useCallback(() => {
      const index = Math.floor(Math.random() * products.length);
      setProductHomeDisp(products[index]);
    /*   setProductTitle(randomProduct[index]["title"])
      setProductPrice(randomProduct[index]["price"]) */
   
      
    }, []);
    
    console.log(productHomeDisp)

    useEffect(() => {
      const intervalID = setInterval(shuffle, 2000);
      return () => clearInterval(intervalID);
    }, [shuffle]);

  /* useEffect(() => {
    fetch("http://localhost:4002/products").then(res => res.json()).then(data => setProducts(data.products))
  }, []) */

  return (
    <>
      <Navbar />
      <Home productHomeDisp={productHomeDisp}/>

      <BrowserRouter>
        {/*  {products.map(product=>{
          
          return <>
          <li>{product.title}</li>
  
          </>
          
          })} */}

       {/*  <Link to="/products">products</Link>

        <Routes>

          <Route path="/products" element={<Products products={products} />} />
        </Routes> */}



        {/*          {JSON.stringify(products,null,2)} */}

        {/*  <a href="http://localhost:4002/products">products</a> */}
      </BrowserRouter>
    </>



  )
}

export default App
