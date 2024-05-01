/*
import Link from 'next/link';
import { Product } from '../components';
import chunk from 'lodash/chunk'
import React from 'react'
import { useRouter } from 'next/router'


const ProductsHandle = ({ productsInfo }) => {

  const router = useRouter()

  React.useEffect(() => {
    if (!router.query.page) {
      router.push({
        pathname: '/',
        query: { page: 1, limit: 1 }
      });
    }
  }, [])
  

    
return (
<>
        




        {pageNumber > 1 && (
            <Link href={`/page=${(pageNum -1)}&limit=${limit}`}>
            <a>Previous Page</a>
            </Link>
        )}

        
        <Link href={`/page=${(pageNum + 1)}&limit=${limit}`}>
           
            <a>Next Page</a>
        </Link>
      </>
    )
}

export default ProductsHandle */
