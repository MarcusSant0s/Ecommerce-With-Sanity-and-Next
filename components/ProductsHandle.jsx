 
import { Product } from '../components';
import chunk from 'lodash/chunk'
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
 


const ProductsHandle = ({ productsInfo }) => {
    const router = useRouter()
    let {page, limit } = router.query;
  
    const Products = chunk(productsInfo, limit)
 

    const changePage = (direction) => {
      // Atualiza a URL para a próxima ou anterior página, mantendo o limite igual
      const currentPage = Number(router.query.page);
      const newPage = direction === 'next'? currentPage + 1 : currentPage - 1;
      router.push({
        pathname: router.pathname,
        query: {...router.query, page: newPage.toString() },
      });
    };


  return( 
     <div>
            <div className='products-heading'>
            <h2>Beset Selling Products</h2>
            <p>Speakers of many variations</p>
          </div>

          <div className='products-container'>
            {Products[page]?.map((product) => <Product key={product._id} product={product} />)} 
          </div>

          {router.query.page > 0 && (
            <button onClick={() => changePage('previous')}>Página anterior</button>
            
          )}
          {router.query.page < (Products.length -1) && (
         <button onClick={() => changePage('next')}>Próxima página</button>
            
          )}
          
       
      
    </div>
  )

};


export default ProductsHandle
