import React from 'react';
import { useRouter } from 'next/router'
import { client } from '../lib/client';
 
import { FooterBanner, HeroBanner, ProductsHandle} from '../components';

const index = ({ products, bannerData }) => {

  
  const router = useRouter()

  React.useEffect(() => {
    if (!router.query.page) {
      router.push({
        pathname: '/',
        query: { page: 0, limit: 10 }
      });
    }
  }, [])

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <ProductsHandle productsInfo={products} />

    { // <FooterBanner footerBanner={bannerData && bannerData[0]} />
    } 
    </>

  )
}

export const getServerSideProps = async () => {

  const query = `*[_type == "product"] | order(createdAt desc)`;
  const products = await client.fetch(query);


  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);



  return {
    props: { products, bannerData }
  }
}

export default index