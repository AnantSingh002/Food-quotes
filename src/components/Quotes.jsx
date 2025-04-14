import React, { useEffect, useState } from 'react'
import Fquote from './Fquote';
// import './quote.css'

function Quotes() {

    const[quote,setQuote] = useState([]);

    useEffect(() =>{
        getQuote();
    },[])

        
    const getQuote = async() =>{
        const resp = await fetch('/quotes.json');
        const data = await resp.json();
        setQuote(data);
        console.log(data);
        
    }
    
  return (
    <> 
    <div className='quoteContainer'>
        {/* <h1>Quotes section </h1> */}
        <div className='quoteContainer'>
            {quote.map((q) =>{
                return < Fquote key={q.id} {...q} />
            })}
        </div>
    </div>
    </>
  )
}

export default Quotes
