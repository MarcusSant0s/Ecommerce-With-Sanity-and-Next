import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
 
const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
        <title> TEST ONE </title>
      </Head>
      <header>
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