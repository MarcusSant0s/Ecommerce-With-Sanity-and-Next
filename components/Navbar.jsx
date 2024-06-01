import React from 'react' 
import { AiOutlineShopping } from 'react-icons/ai'
 import Image from 'next/image';
import {Cart}  from  './'
import Logo from '../public/logo.jpg'
import { CiHeart } from "react-icons/ci";
import { useStateContext } from '../context/StateContext';

 


const Navbar = () => {
  const { showCart ,setShowCart, totalQuantities} = useStateContext(); 
  return (

    
    <nav className="navbar navbar-expand-md  ">

<button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>

    <a href='#' className="navbar-brand"> <Image src={Logo} height={50} width={50} alt="some text" fill/></a>
  
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">Todos Produtos</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Anéis</a>
          </li>


          <li className="nav-item">
            <a className="nav-link" href="#">Brincos</a>
          </li>


          <li className="nav-item">
            <a className="nav-link" href="#">Colares</a>
          </li>
  
        </ul>
      </div>
      
      <div className="navbar-icons">


      <button type='button' >
      <CiHeart />
      </button>

      <button type='button' className='cart-icon' onClick={ ()=> setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>



      </div>

     { showCart && <Cart />}








</nav>

  )
}

export default Navbar