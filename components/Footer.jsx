import React from 'react'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'> 
      <p> 2024 BRN All rights reserved</p>
      <p className='icons'>
        <AiFillInstagram/>
        <AiFillFacebook/>
      </p>
    </div>
  )
}

export default Footer