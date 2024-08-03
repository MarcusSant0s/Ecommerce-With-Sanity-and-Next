import "bootstrap/dist/css/bootstrap.min.css";
 
import React from 'react'
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components';
import { StateContext } from '../context/StateContext'; 


import '../styles/globals.css'
export default function App({ Component, pageProps }) {
  return (
    <StateContext>
  <Layout>
    <Toaster/>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3. 3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>

     
    <Component {...pageProps} />
  </Layout>
  </StateContext>
  
  )
}
