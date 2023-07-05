import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/profilehome2.png'
import HeaderSocial from './HeaderSocial'
import Typical from 'react-typical'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Danu Nur Irwanto</h1>
        
          {" "}
          <h2 className="text-light">
          <Typical
          steps={[
            "Fresh Graduate 👨‍🎓",1000,
            "Junior Programmer 💻",1000,
          ]}
          loop={Infinity}
          />
        
        </h2>
        <CTA />
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header