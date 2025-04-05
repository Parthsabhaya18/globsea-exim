"use client";
import { useState, useEffect, useCallback } from "react";
import { Box, Button, Link, IconButton, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css"; // Using global CSS file
import Images from '@/utilies/Images.js'
import Image from "next/image.js";
import CustomButton from '../../common/CustomButton.js'
import SvgIcon from "../../icons/SvgIcon";
import { Icons } from '../../icons/Icons.js'
const NAV_LINKS = [
  { name: "Home", path: "#" },
  { name: "Our Products", path: "#" },
  { name: "About Us", path: "#" },
  { name: "What Our Clients Say...?", path: "#" },
  { name: "Services", path: "#" },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll event listener for sticky navbar
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle link clicks
  const handleLinkClick = useCallback((e, linkName) => {
    e.preventDefault();
    setActive(linkName);
    setMobileOpen(false);
  }, []);

  return (
    <>
      <Box className={`navbar-main ${isSticky && !mobileOpen ? "sticky" : ""}`}>
         <Image className="logo" src={Images.LOGO} alt="couldn't load" /> 
        {!mobileOpen && (
          // <IconButton className="menu-icon" onClick={() => setMobileOpen(true)}>
          //   <MenuIcon />
          // </IconButton>
        <>
        <Icons/>
          <SvgIcon id="menu"   className="menu-icon"/>
        </>
          
        )}
        {/* Desktop Navbar */}
        <Box className="navbar-list">
        <Box sx={{ display: 'flex', gap: '20px', fontFamily: 'var(--font-primary)' }}>
  {NAV_LINKS.map(({ name }) => (
    <Link
      key={name}
      onClick={(e) => handleLinkClick(e, name)}
      style={{
        textDecoration: 'none',
        color: active === name ? 'var(--color-white)' : 'var(--color-offWhite)',
        fontSize: '16px',
        padding: '10px',
        cursor: 'pointer',
        borderBottom: active === name ? '2px solid var(--color-primary)' : 'none',
      }}
    >
      {name}
    </Link>
  ))}

</Box>
    <CustomButton title='Contact Us!' />

</Box>
        {/* Mobile Drawer Menu */}
        <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)} >
          <Box className="mobile-menu">
            {mobileOpen && (
              <IconButton onClick={() => setMobileOpen(false)} className="close-button">
                <CloseIcon  />
              </IconButton>
            )}
            <List>
              {NAV_LINKS.map(({ name }) => (
                <ListItem button key={name} className="navbar-link" onClick={(e) => handleLinkClick(e, name)}>
                  {name}
                </ListItem>
              ))}
              <ListItem>
                <Button className="contact-button">Contact Us!</Button>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
