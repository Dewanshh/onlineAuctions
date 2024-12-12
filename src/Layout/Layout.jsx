import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({children}) {
  return (
    <div className='px-52 bg-teal-400'>
        <Navbar/>
        <div>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout