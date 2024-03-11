import { useRouter } from 'next/router'
import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, Pagination } from '../components';

const index = ({ products, bannerData, Page, Limit,NumberOfPages}) => {

  const router = useRouter()

  React.useEffect(() => {
    if (!router.query.page) {
      router.push({
        pathname: '/',
        query: { page: 1, limit: 10 }
      });
    }
  }, [])



  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className='products-heading'>
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <Pagination
      /> 


      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>

  )
}

export const getServerSideProps = async () => {

  const query =  `*[_type == "product"] | order(_createdAt desc)`;
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
    


  return {
    props: { products, bannerData }
  }
}

export default index