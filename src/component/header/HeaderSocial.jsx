import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/danu-nur-irwanto-36a03811b" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/Danu-Nur" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://web.facebook.com/erorr.poul/" target="_blank" rel="noreferrer"><BsFacebook /></a>
        <a href="https://www.instagram.com/danu_irwant/" target="_blank" rel="noreferrer"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocial