import React from 'react'
import Navbar from '../../components/common/Navbar/Navbar'
import Footer from '../../components/common/Footer/Footer'
import { Outlet } from 'react-router-dom'
import TopBar from '../../components/common/Navbar/TopBar'

const Layout = () => {
  return (
    <div>
        <TopBar/>
        <Navbar/>
            <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout