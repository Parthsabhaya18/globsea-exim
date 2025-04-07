"use client";
import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import { footerData } from "@/utilies/UtilisJson";
import { Facebook, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
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
      <Grid container spacing={4} className="footer-line" >
        {/* About Section */}
        <Grid item xs={12} md={4} className="company-desc">
          <Typography variant="h6" className="footer-header">
            {footerData.about.title}
          </Typography>
          <Typography variant="body2" className="footer-header-desc">
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
                    border: "1px solid var(--color-white)",
                  },
                }}
              >
                {iconMap[social.icon]}
              </IconButton>
            ))}
          </Box>
        </Grid>

        {/* Other Sections in 3-column layout */}
        <Box
        className="three-sec"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, 
            gap:{xs:5},
            justifyContent: "space-between",
          }}
        >
          {/* <Grid item xs={12} md={8}> */}
          {/* <Grid container spacing={4}> */}
          {/* Useful Links */}
          <Grid item xs={12} sm={4} className="userful-link">
            <Typography variant="h6" className="footer-child-title">
              Useful Links
            </Typography>
            {footerData.links.map((link, i) => (
              <Typography key={i}>
                <Link
                  className="footer-child-menu"
                  underline="hover"
                  color="inherit"
                >
                  {link.label}
                </Link>
              </Typography>
            ))}
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={4} className="userful-link">
            <Typography variant="h6" className="footer-child-title">
              Our Services
            </Typography>
            {footerData.services.map((service, i) => (
              <Typography key={i} className="footer-child-menu">
                {service}
              </Typography>
            ))}
          </Grid>

          {/* Contact */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="footer-child-title">
              Contact Us
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                mt: "12px",
              }}
            >
              <Typography variant="body2" className="footer-header-contactus">
                {footerData.contact.address}
              </Typography>
              <Typography>
                <strong>Phone/WhatsApp:</strong>{" "}
                {footerData.contact.PhoneWhatsApp}
              </Typography>
              <Typography>
                <strong>Email:</strong> {footerData.contact.EmailInfo}
              </Typography>
              {/* <Typography>
                <strong>Email:</strong> {footerData.contact.EmailExport}
              </Typography> */}
            </Box>
          </Grid>
          {/* </Grid> */}
          {/* </Grid> */}
        </Box>
        {/* Bottom Text */}
        <Typography variant="body2" className="footer-bottom-text">
          {footerData.copyright.one}
          <strong>{footerData.copyright.two}</strong>
          {footerData.copyright.three}
        </Typography>
      </Grid>
    </Box>
  );
};

export default Footer;
