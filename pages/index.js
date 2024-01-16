
import React from 'react';
import {client} from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const index = ({products, bannerData}) => {
  return (
    <>
     <HeroBanner/>

    <div className='products-heading'>
      <h2>Beset Selling Products</h2>
      <p>Speakers of many variations</p>  
    </div>

    <div className='products-conteiner'>
        {products?.map((product) => product.name)    }
    </div>

    <FooterBanner/>
    </>
    
  )
}
export const getServerSideProps = async () =>{
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return{
    props: {products, bannerData}
  }
}

export default index