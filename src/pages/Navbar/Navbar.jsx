"use client";
import { Box, Button, Link,IconButton, Drawer, List, ListItem } from "@mui/material";
import './Navbar.css';  
import SvgImages from "../../utilies/image.js";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [active,setActive] = useState('Home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (e,linkName) => {
    e.preventDefault();
    setActive(linkName);
    setMobileOpen(false);
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
    <>

    <Box className={`navbar-main ${isSticky && !mobileOpen  ? 'sticky' : ''}`}>
      {!mobileOpen &&
        <SvgImages   sx={{ height:'100px'}}/> }
      {!mobileOpen && <IconButton className="menu-icon" onClick={() => setMobileOpen(true)}>
        <MenuIcon />
      </IconButton>  }
      
      <Box className="navbar-list">
        <Link  className={`navbar-link ${active === 'Home' ? 'active' : ''}`} onClick={() => handleLinkClick('Home')}>Home</Link>
        <Link  className={`navbar-link ${active === 'Our Products' ? 'active' : ''}`} onClick={() => handleLinkClick('Our Products')}>Our Products</Link>
        <Link  className={`navbar-link ${active === 'About Us' ? 'active' : ''}`} onClick={() => handleLinkClick('About Us')}>About Us</Link>
        <Link className={`navbar-link ${active === 'What Our Clients Say...?' ? 'active' : ''}`} onClick={() => handleLinkClick('What Our Clients Say...?')}>What Our Clients Say...?</Link>
        <Link  className={`navbar-link ${active === 'Services' ? 'active' : ''}`} onClick={() => handleLinkClick('Services')}>Services</Link>
        <Button className="contact-button" title="Contact Us!">Contact Us!</Button>
      </Box>


       {/* Mobile Drawer Menu */}
       <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}  classes={{ paper: "drawer-paper" }}>
        <Box className="mobile-menu">
          {mobileOpen && <IconButton onClick={() => setMobileOpen(false)} className="close-button">
            <CloseIcon />
          </IconButton>}
          <List>
            <ListItem button className='navbar-link' onClick={() => handleLinkClick("Home")}>  Home </ListItem>
            <ListItem button className='navbar-link' onClick={() => handleLinkClick("Our Products")}>  Our Products </ListItem>
            <ListItem button className='navbar-link' onClick={() => handleLinkClick("About Us")}> About Us </ListItem>
            <ListItem button className='navbar-link' onClick={() => handleLinkClick("What Our Clients Say...?")}> What Our Clients Say...? </ListItem>
            <ListItem button className='navbar-link' onClick={() => handleLinkClick("Services")}> Services </ListItem>
            <ListItem> <Button className="contact-button">Contact Us!</Button> </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
    </>
  );
};

export default Navbar;
