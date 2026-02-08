import { Outlet } from 'react-router'
import React from 'react'
import Header from './Header'
import Footer from "./Footer"

const Layout = () => {
  return (
    <section className=''>

   <Header/>

    <main>

      <Outlet/>

    </main>

    
   <Footer/>
    

    </section>
    
  )
}

export default Layout