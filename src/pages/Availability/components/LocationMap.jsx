// components/LocationMap.tsx

"use client";

import { Box } from "@mui/material";

const LocationMap = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        height: "400px",
        position:'relative'
      }}
    >
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.742505885758!2d72.87265287380299!3d21.202385581795337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f9f880f926d%3A0xc77b3dd9fddef9c9!2sKiranpark%20Society%2C%20Punagam%2C%20Varachha%2C%20Surat%2C%20Gujarat%20395010!5e0!3m2!1sen!2sin!4v1744312714546!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{border:0,padding:'0px 5px'}}
        allowFullScreen={true}
        loading="lazy"
       referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </Box>
  );
};

export default LocationMap;
