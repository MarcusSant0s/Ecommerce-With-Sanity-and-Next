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

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
     integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
     crossOrigin="anonymous"></script>
     
    <Component {...pageProps} />
  </Layout>
  </StateContext>
  
  )
}
