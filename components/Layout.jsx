import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
 
const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
 <title> TEST ONE </title>
      </Head>
      <header className='sticky'>
        <Navbar></Navbar>
      </header>
      <main className='main-container'>
        {children}
      </main>
      <Footer>

      </Footer>
      
    </div>
  )
}

export default Layout