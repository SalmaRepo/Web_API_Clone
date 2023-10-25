import './Home.css'
import { useState, useEffect,useCallback } from 'react'
export default function Home({productHomeDisp}) {
    console.log(productHomeDisp)
    



    return (
        <div id="Home" className="home">
            <div className="homeContent">
                <h1>Dummy<strong>JSON</strong></h1>
                <p>Get dummy/fake JSON data to use as placeholder in development or in prototype testing</p>
                <div className="homeContentLinks">
                    <a href="https://github.com/SalmaRepo/Web_API_Clone" className="homeLinks">view on GitHub</a>
                    <a href="#" className="homeLinks">Read Docs</a>
                </div>

            </div>
          
            {productHomeDisp&&<div className='callbacksHome'>
           <p className='productCallbacks'>{JSON.stringify(productHomeDisp,null,2)}</p>
          <p>{productHomeDisp.title?productHomeDisp.title:""}-<span className='category'>{productHomeDisp.category?productHomeDisp.category:""}</span></p>
           <h5>{productHomeDisp.price?productHomeDisp.price:""}$-✡ {productHomeDisp.rating?productHomeDisp.rating:""} </h5> 
          

            </div>}


        </div>
    )
}