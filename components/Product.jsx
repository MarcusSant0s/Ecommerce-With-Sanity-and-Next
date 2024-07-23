import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Product = ({ product: {image, name, slug, price} }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <div className='product-header'>
            <img 
            src={urlFor(image && image[0])}
            className='product-image'
          
          />

            <div className='product-price'>
              <span>-35%</span>
              <p > <span className='sale-price'> R${price}</span> <span className='discount'> R$20</span></p>
          
            </div>
          </div>
        <p className='product-name'> <strong>{name}</strong>
         <br></br> 
         Cat
        </p>
        
          
        </div>
      </Link>
    </div>
  )
}

export default Product