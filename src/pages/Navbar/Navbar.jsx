"use client";
import { useState, useEffect, useCallback } from "react";
import {
  Box,
  Button,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css"; // Using global CSS file
import Images from "@/utilies/Images.js";
import Image from "next/image.js";
import CustomButton from "../../common/CustomButton.js";

const NAV_LINKS = [
  { name: "Home", path: "#hero" },
  { name: "Our Products", path: "#" },
  { name: "About Us", path: "#aboutUs" },
  { name: "What Our Clients Say...?", path: "#" },
  { name: "Services", path: "#ourServices" },
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
          <IconButton className="menu-icon" onClick={() => setMobileOpen(true)}>
            <MenuIcon />
          </IconButton>
        )}
        {/* Desktop Navbar */}
        <Box className="navbar-list">
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              fontFamily: "var(--font-primary)",
            }}
          >
            {NAV_LINKS.map((item,index) => (
              <Link
              href={item.path}
                key={index}
                onClick={(e) => handleLinkClick(e, item.name)}
                style={{
                  textDecoration: "none",
                  color:
                    active === item.name
                      ? "var(--color-white)"
                      : "var(--color-offWhite)",
                  fontSize: "16px",
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom:
                    active === item.name ? "2px solid var(--color-primary)" : "none",
                }}
              >
                {item.name}
              </Link>
            ))}
          </Box>
          <CustomButton title="Contact Us!" />
        </Box>
        {/* Mobile Drawer Menu */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          sx={{overflow:'auto'}}
        >
          <Box
            className={`mobile-menu ${mobileOpen ? "slide-down" : ""}`}
            sx={{
              width: { xs: "100vw", sm: "45vw", md: "40vw" },
            }}
          >
           <Box sx={{display:'flex',justifyContent:'flex-end'}}>
           {mobileOpen && (
              <IconButton
                onClick={() => setMobileOpen(false)}
                className="close-button"
              >
                <CloseIcon />
              </IconButton>
            )}
           </Box>
            <List sx={{display:'flex',flexDirection:'column',gap:2.5,margin:2}}>
              {NAV_LINKS.map(({ name }) => (
                <ListItem
                  key={name}
                  className="navbar-link"
                  sx={{
                    color:
                      active === name
                        ? "var(--color-white)"
                        : "var(--color-offWhite)",
                    fontSize: "16px",
                    padding:0
                  }}
                  onClick={(e) => handleLinkClick(e, name)}
                >
                  {name}
                </ListItem>
              ))}
              <CustomButton title="Contact Us!" />
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
