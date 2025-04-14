import React from 'react'
import style from './header.module.css'

function Header() {
  return (
    <header>
        <div className={style.container}>
            <div className={style.logo}>
              <img src="/home/logo.svg" alt="" srcset="" />
              <h1>GeekFood</h1>
            </div>
            <div className={style.list}>
              <ul>
                <li>Home</li>
                <li>Quote</li>
                <li>Resturant</li>
                <li>Food</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={style.button}>
              <button>Get Started</button>
            </div>
          
        </div>
        </header>
    
  )
}

export default Header
