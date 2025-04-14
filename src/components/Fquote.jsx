import React from 'react'
import './quote.css'

function Fquote({quote,author}) {
  return (
        <div className='quoteCard' key={Date.now()}>
            <h3 className='quoteText'>{quote}</h3>
            <p className='quoteAuthor'>{author}</p>
        </div>
    
  )
}

export default Fquote
