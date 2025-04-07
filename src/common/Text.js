// TypographyText.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const TypographyText = ({
  children,
  variant = 'body1',
  color = 'var(--color-text)',
  fontWeight = 'normal',
  sx,
}) => {
  return (
    <Box sx={{ position: 'relative', textAlign: 'center', display: 'inline-block', mb: 4 ,}}>
      <Typography
        variant="h1"
        sx={{
          position: 'absolute',
          top: { xs: '20%', sm: '25%' },
          left: { xs: '50%', sm: '49%' },
          transform: 'translate(-50%, -50%)',
          display:{
            xs:'none',
            sm:'block'
          },
          fontSize: {  xs: '2.5rem',
          sm: '3rem',
          md: '3.8rem',
          lg: '4.5rem',},
          fontWeight: 'bold',
          opacity: 0.05,
          whiteSpace: 'nowrap',
          zIndex: 0,
          userSelect: 'none',
        }}
      >
        {children}
      </Typography>
    <Typography
      variant={variant}
      color={color}
      fontWeight={fontWeight}
      sx={{...sx,position:'relative',zIndex:1,fontSize:'32px',fontWeight:'bold', textAlign: 'center'}}
    >
      {children}
      <Box sx={ {width:'50px',height:'3px',position:'absolute',left:'0',right:'0',background:'var(--color-primary)',margin: '8px auto 0',}}></Box>
    </Typography>
    </Box>
  );
};

export default TypographyText;
