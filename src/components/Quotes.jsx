import React, { useEffect, useState } from 'react'

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
    <div className='container'>

        <h1>Quotes section </h1>
        <div>
            {}
        </div>


    </div>
  )
}

export default Quotes
