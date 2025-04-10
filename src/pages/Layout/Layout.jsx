'use client'
import Navbar from '../../pages/Navbar/Navbar.jsx'
import Footer from '../../pages/Footer/Footer.jsx'
import { useEffect, useState } from 'react';
const Layout = ({children}) =>{
    return(
        <>
            {/* <Navbar/> */}
            {children}
            <Footer/>
        </>
    )
}
export default Layout