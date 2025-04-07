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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0859063467024!2d72.89562267380379!3d21.22844178089302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fe60cb960f3%3A0x66c9f1d82612553c!2sGLOBAL%20PATHOLOGICAL%20SPECIALITY%20LABORATORY%20(GPSL)!5e0!3m2!1sen!2sin!4v1744019041698!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{border:0,padding:'0px 20px'}}
        allowFullScreen={true}
        loading="lazy"
       referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </Box>
  );
};

export default LocationMap;
