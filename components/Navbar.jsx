import React, { useEffect, useRef } from 'react'
import { AiOutlineShopping } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

import { Cart } from './'
import { CiHeart } from "react-icons/ci";
import { useStateContext } from '../context/StateContext';
import logo from '../public/logo.svg'


const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();



  const openRef = useRef(null);
  const menuRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) && !menuRef.current.classList.contains('close')) {
        menuRef.current.classList.add('close');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const open = openRef.current;
    const menu = menuRef.current;
    const close = closeRef.current;


    const toggleMenu = () => {
      menu.classList.toggle('close');
    };

    open.addEventListener('click', toggleMenu);
    close.addEventListener('click', toggleMenu);

    return () => {
      open.removeEventListener('click', toggleMenu);
      close.removeEventListener('click', toggleMenu);
    };
  }, []);





  return (
    <>
      <nav className="navbar container-fluid  ">
        <div className="container-fluid ">



          <Link href="/" className="navbar-brand"> 
            <div>
            <Image src={logo} height={50} width={50} alt="some text" fill={true} />
            </div>
          </Link>


          <div className="d-flex ">
            <div className="icon-container">
              <a >
                <CiHeart />
              </a>

              <a className='cart-icon' onClick={() => setShowCart(true)}>
                <AiOutlineShopping />
                <span className='cart-item-qty'>{totalQuantities}</span>
              </a>
            </div>
          </div>

        </div>
      </nav>


      <div className="navbar--container  sticky">
        <div className="navbar--title"><h4>Categorias</h4></div>

        <div className="navbar--icon" ref={openRef}>
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" fill="currentColor" className="bi bi-text-indent-left" viewBox="0 0 16 16">
            <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708M7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
          </svg></div>
      </div>

      <div className="nav--open close sticky" ref={menuRef}>

        <div className="nav--open-icon" ref={closeRef}>
          <div className="nav--open-title">explore</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-text-indent-right" viewBox="0 0 16 16">
            <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m10.646 2.146a.5.5 0 0 1 .708.708L11.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zM2 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
          </svg>
        </div>


        <div className="nav--open-menu">
          <a href=""><span>Quem somos?</span></a>
          <a href=""><span>Brincos</span></a>
          <a href=""><span>Colares</span></a>
          <a href=""><span>Anél</span></a>
          <a href=""><span>Fale Conosco</span></a>

        </div>
      </div>

      {showCart && <Cart />}

    </>
  )
}

export default Navbar