import React from 'react'
import { Outlet } from 'react-router'
//import HeaderAdmin from ".HeaderAdmin.jsx"
import NavbarAdmin from './NavbarAdmin'

const LayoutAdmin = () => {
  return (
   
    <section>
       {/*  <HeaderAdmin/> */}
       <div className='flex'> 
      
       <NavbarAdmin/>
        <main className='p-10'>
            <Outlet/>
        </main>
        </div>
    </section>
    
  )
}

export default LayoutAdmin