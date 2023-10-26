import './CodeCopy.css'
import { useState, useEffect, useRef } from 'react'

export default function CodeCopy() {
    const [productOne, setProductOne] = useState(null);
    const [haveProduct, setProductHave] = useState(false);
    const textCopy = useRef();

    const code=`fetch('https://dummyjson.com/products/1')
    .then(res=>res.json( ))
    .then(json=>console.log(json))`

    useEffect(() => {
        fetch('http://localhost:4004/products/1')
            .then(res => res.json())
            .then(data => setProductOne(data))
    }, [])



    return (
        <div className='copyCode'>
            <h1  ref={textCopy}>Got Tierd of Lorem ipsum Data?</h1>
            <h3>Example Code</h3>
            <p className='exampleCode'  >{code}</p>

            <div className='copyCodeButtons'>
                <button onClick={() => { productOne && setProductHave(!haveProduct) }}>Try it now</button>
                <button onClick={() => window.navigator.clipboard.writeText(code)
                }>Copy Code</button>
            </div>


            {haveProduct ? <p className='copyCodeFetch'>{JSON.stringify(productOne, null, 1)}</p> : <p>{""}</p>}
        </div>
    )
}