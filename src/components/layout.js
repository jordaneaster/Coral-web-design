import React from 'react'
import './variables.css'
import './global.css'
import Seo from './seo'
import Navbar from './../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'


const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
