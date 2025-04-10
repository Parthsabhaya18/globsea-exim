"use client";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import { footerData } from "@/utilies/UtilisJson";
import "./Footer.css";

const iconMap = {
  WhatsApp: <WhatsApp />,
  facebook: <Facebook />,
  instagram: <Instagram />,
  linkedin: <LinkedIn />,
};

const Footer = () => {
  return (
    <Box className="Footer-Main">
      <Box className="footer-wrapper">
        {/* Left: Company Description */}
        <Box className="footer-column footer-left">
          <Typography variant="h6" className="footer-header">
            {footerData.about.title}
          </Typography>
          <Typography className="footer-header-desc">
            {footerData.about.lines}
          </Typography>

          <Box className="footer-social-icons">
            {footerData.social.map((social, i) => (
              <IconButton
                key={i}
                href={social.href}
                target="_blank"
                component="a"
                sx={{
                  color: "var(--color-white)",
                  border: "1px solid var(--color-contact-us)",
                  "&:hover": {
                    borderColor: "var(--color-white)",
                  },
                }}
              >
                {iconMap[social.icon]}
              </IconButton>
            ))}
          </Box>
        </Box>

        {/* Middle: Links and Services */}
        <Box className="footer-column footer-middle">
          <Box className="footer-list">
            <Typography className="footer-child-title">Useful Links</Typography>
            {footerData.links.map((link, i) => (
              <Link key={i} href={link.href} className="footer-child-menu" >
                {link.label}
              </Link>
            ))}
          </Box>

          <Box className="footer-list">
            <Typography className="footer-child-title">Our Services</Typography>
            {footerData.services.map((service, i) => (
              <Typography key={i} className="footer-child-menu">
                {service}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Right: Contact */}
        <Box className="footer-column footer-right">
          <Typography className="footer-child-title">Contact Us</Typography>
          <Typography className="footer-header-contactus">{footerData.contact.address}</Typography>
          <Typography>
            <strong>Phone/WhatsApp:</strong> {footerData.contact.PhoneWhatsApp}
          </Typography>
          <Typography>
            <strong>Email:</strong> {footerData.contact.EmailInfo}
          </Typography>
          {/* <Typography>
            <strong>Email:</strong> {footerData.contact.EmailExport}
          </Typography> */}
        </Box>
      </Box>

      {/* Bottom Line */}
      <Box className="footer-bottom-text">
        <Typography variant="body2">
          {footerData?.copyright?.one}
          <strong>{footerData?.copyright?.two}</strong>
          {footerData?.copyright?.three}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
