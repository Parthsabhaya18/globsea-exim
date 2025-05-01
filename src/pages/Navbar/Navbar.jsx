"use client";
import { useState, useEffect, useCallback } from "react";
import { Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Images from "@/utilies/Images.js";
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

useEffect(() => {
  const handleScroll = () => setIsSticky(window.scrollY > 0);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

useEffect(() => {
  if (mobileOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return () => {
    document.body.style.overflow = "auto";
  };
}, [mobileOpen]);


  const handleLinkClick = useCallback((e, linkName) => {
    e.preventDefault();
    setActive(linkName);
    setMobileOpen(false);
  }, []);

  return (
    <>
      <div
        className={`w-full z-[9999] transition-all duration-500 ${
          isSticky && !mobileOpen
            ? "fixed top-0 bg-[var(--color-navigation)] h-[90px]"
            : "sticky top-0 bg-[var(--color-navigation)] h-[110px]"
        }`}
      >
      <div className="w-full max-w-[1200px] xl:mx-auto xl:px-6 px-4 md:px-6 flex justify-between items-center h-full">
          <Image
            src={Images.LOGO}
            alt="Logo"
            className="w-[153px] h-[100px]"
          />

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-6 items-center">
            <div className="flex gap-5 font-[var(--font-primary)]">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.name)}
                  className={`text-[16px] py-2 px-1 border-b-2 ${
                    active === item.name
                      ? "text-[var(--color-white)] border-[var(--color-primary)]"
                      : "text-[var(--color-offWhite)] border-transparent"
                  } transition-colors`}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <CustomButton title="Contact Us!" />
          </div>

          {/* Mobile Menu Icon */}
          {!mobileOpen && (
            <button
              className="lg:hidden text-[var(--color-white)]"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </button>
          )}
        </div>

        {/* Mobile Drawer */}
        <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          zIndex: 13000,
          "& .MuiDrawer-paper": {
          
            width: "100vw",
            maxWidth: "400px",
            height: "100vh",
            backgroundColor: "var(--color-navigation)",
            transition: "all 0.8s ease-in-out",
            overflowY: "auto",
          },
        }}
      >
  <div
    className={`h-full p-6 ${
      mobileOpen ? "animate-slideDown" : ""
    }`}
  >
    <div className="flex justify-end">
      <button
        onClick={() => setMobileOpen(false)}
        className="text-[var(--color-white)]"
      >
        <CloseIcon />
      </button>
    </div>
    <ul className="flex flex-col gap-6 mt-6 ml-2">
      {NAV_LINKS.map(({ name }) => (
        <li
          key={name}
          onClick={(e) => handleLinkClick(e, name)}
          className={`text-[16px] cursor-pointer ${
            active === name
              ? "text-[var(--color-white)]"
              : "text-[var(--color-offWhite)]"
          }`}
        >
          {name}
        </li>
      ))}
      <CustomButton title="Contact Us!" />
    </ul>
  </div>
</Drawer>

      </div>

    
    </>
  );
};

export default Navbar;
