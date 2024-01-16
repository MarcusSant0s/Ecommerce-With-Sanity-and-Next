import React from 'react'
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='navbar-conteiner'>
      <p className='logo'>
        <Link href="/"> BRN HEADPHONES</Link>
      </p>

      <button type='button'
      className='cart-icon' onClick="">
        <AiOutlineShopping />
        <span className='cart0item-qty'></span>
      </button>
    </div>
  )
}

export default Navbar