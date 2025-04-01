"use client";
import { Box, Button, Link } from "@mui/material";
import './Navbar.css';  
import SvgImages from "../../utilies/image.js";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [active,setActive] = useState('Home');

  const handleLinkClick = (linkName) => {
    setActive(linkName);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true); 
      } else {
        setIsSticky(false); 
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box className={`navbar-main ${isSticky ? 'sticky' : ''}`}>
      <SvgImages  sx={{height:'100px'}}/>
      <Box className="navbar-list">
        <Link  className={`navbar-link ${active === 'Home' ? 'active' : ''}`} onClick={() => handleLinkClick('Home')}>Home</Link>
        <Link  className={`navbar-link ${active === 'Our Products' ? 'active' : ''}`} onClick={() => handleLinkClick('Our Products')}>Our Products</Link>
        <Link  className={`navbar-link ${active === 'About Us' ? 'active' : ''}`} onClick={() => handleLinkClick('About Us')}>About Us</Link>
        <Link className={`navbar-link ${active === 'What Our Clients Say...?' ? 'active' : ''}`} onClick={() => handleLinkClick('What Our Clients Say...?')}>What Our Clients Say...?</Link>
        <Link  className={`navbar-link ${active === 'Services' ? 'active' : ''}`} onClick={() => handleLinkClick('Services')}>Services</Link>
        <Button className="contact-button" title="Contact Us!">Contact Us!</Button>
      </Box>
    </Box>
  );
};

export default Navbar;
