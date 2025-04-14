import React from 'react'
import style from './footer.module.css';

function Footer() {
  return (
    <div>
      <footer>
          <div>
           <img src="/home/footereLogo.svg" alt="" srcset="" />    
          </div>
      
          <div>
          <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, corporis.</p>
          <br />
          <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          </div>
      
          <div className={style.des}>
          <p>About</p>
          <p>Carrer</p>
          <p>History</p>
          <p>Service</p>
          <p>Blog</p>
          </div>
      
          <div className={style.icons}>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          </div>
      
          </footer>
      
    </div>
  )
}

export default Footer
