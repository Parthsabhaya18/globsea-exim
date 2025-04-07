'use client'
import { Box, Typography } from "@mui/material";
import TypographyText from "../../../common/Text";
import aboutUs from "../../../../public/assests/about-us-photo.jpg";
import Image from "next/image";
import { translate } from "@/utilies/translate";

const AboutUs = () => {
  return (
    <Box className="main">
      <TypographyText variant="h1">About us</TypographyText>

      <Box
        className="about-us"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "center",
          justifyContent: "center",
          mt: 4,
        }}
      >
        <Box className="photo-frame">
          <Image
            src={aboutUs}
            alt="About Us Image"
            priority
            fill
            className="about-image"
            sizes="(max-width: 768px) 80vw, 416px"
          />
        </Box>

        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography className="about-us-title1" sx={{ mb: 2,color:'var(--color-brown)' }}>
            {translate.ABOUTUSTITLE}
          </Typography>
          <Typography className="about-us-text" sx={{ mb: 3,color:'var(--color-text)' }}>
            {translate.ABOUTFIRSTDES1}
            <br />
            <br />
            {translate.ABOUTFIRSTDES2}
            <br />
            <br />
            {translate.ABOUTFIRSTDES3}
            
          </Typography>
          <Typography className="about-us-title2" sx={{color:'var(--color-default)'}}>JV & Sons Export</Typography>
          <Typography className="about-us-text2" sx={{color:'var(--color-default)'}}>
            {translate.ABOUTSECONDDES1}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
