import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs';
import { useRouter } from 'next/router';
import { runFireworks } from '../lib/utils';

import { useStateContext } from '../context/StateContext';
const Success = () => {

  const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext();

  useEffect(() =>{
  localStorage.clear();
  setCartItems([]);
  setTotalPrice(0);
  setTotalQuantities(0);
  runFireworks();
}, [])
  
  return (
    <div className='sucess-wrapper'> 
      <div className='success'>
          <p className='icon'>
            < BsBagCheckFill />
          </p>
        <h2> Parabéns, pedido confirmado!</h2>
        <p className='email-msg'>Check seu email :)</p>

        <p className='description'>
          Alguma duvida? Por favor nos contate!
          <a className='email' href='mailto:bussinesmarcuspaulo@gmail.com'>
          bussinesmarcuspaulo@gmail.com
          </a>
        </p>

        <Link href="/">
          <button type='button' width='300px' className='btn'>
          Continue Shopping
          </button>
        </Link>

      </div> 
    </div>
  )
}

export default Success